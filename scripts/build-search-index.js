#!/usr/bin/env node
/**
 * build-search-index.js
 * ---------------------
 * Parses publications.html, news.html, team.html, and projects.html
 * to auto-generate assets/js/search-data.js.
 *
 * Usage:  node scripts/build-search-index.js
 * Requires: cheerio  (npm install cheerio)
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'assets', 'js', 'search-data.js');

function readHTML(name) {
  return fs.readFileSync(path.join(ROOT, name), 'utf8');
}

// ── Publications ────────────────────────────────────
function parsePublications() {
  const $ = cheerio.load(readHTML('publications.html'));
  const entries = [];

  $('.publication').each(function () {
    const classes = $(this).attr('class') || '';
    const yearMatch = classes.match(/\b(20\d{2})\b/);
    const year = yearMatch ? yearMatch[1] : '';

    // Determine type from classes
    let badge = 'Conference';
    if (classes.includes('journal')) badge = 'Journal';
    else if (classes.includes('book')) badge = 'Book Chapter';
    else if (classes.includes('patent')) badge = 'Patent';

    // Extract field tags
    const fieldTags = [];
    ['hci', 'sensing', 'ai', 'healthcare', 'embedded', 'networking'].forEach(f => {
      if (classes.includes(f)) fieldTags.push(f.charAt(0).toUpperCase() + f.slice(1));
    });

    const p = $(this).find('p');
    const authors = p.find('strong').text().trim();
    const titleEl = p.find('em');
    let title = titleEl.text().trim();
    // Remove surrounding quotes
    title = title.replace(/^[""\u201C]+|[""\u201D]+$/g, '').replace(/\.$/,'').trim();

    // Full text is the paragraph text (includes venue info)
    const fullText = p.text().trim();
    // Extract venue part: everything after the <em> closing
    const afterTitle = fullText.substring(fullText.indexOf(titleEl.text()) + titleEl.text().length).trim();
    const venue = afterTitle.replace(/^[.,\s]+/, '').trim();

    const text = [authors, venue, badge, fieldTags.join(' ')].filter(Boolean).join('. ');

    if (title) {
      entries.push({ category: 'publication', title, text, url: 'publications.html', year });
    }
  });

  return entries;
}

// ── News ────────────────────────────────────────────
function parseNews() {
  const $ = cheerio.load(readHTML('news.html'));
  const entries = [];

  // Each accordion item is a year
  $('#newsAccordion .accordion-item').each(function () {
    const yearBtn = $(this).find('.accordion-button').first().text().trim();
    const year = yearBtn.match(/\d{4}/)?.[0] || '';

    $(this).find('.news-card').each(function () {
      const titleEl = $(this).find('.news-title');
      // Title text without icon
      const title = titleEl.clone().children('i').remove().end().text().trim();
      const desc = $(this).find('.news-desc').text().trim();
      const badge = $(this).find('.news-badge').text().trim();
      const text = [desc, badge ? badge + ' ' + year : ''].filter(Boolean).join('. ');

      if (title) {
        entries.push({ category: 'news', title, text, url: 'news.html', year });
      }
    });
  });

  return entries;
}

// ── Team ────────────────────────────────────────────
function parseTeam() {
  const $ = cheerio.load(readHTML('team.html'));
  const entries = [];

  // Profile cards (faculty, PhD, RA, MTech, etc.)
  $('.profile-card').each(function () {
    const name = $(this).find('.profile-name').text().trim();
    const role = $(this).find('.profile-role').text().trim();
    const area = $(this).find('.profile-area').text().trim();
    const text = [role, area].filter(Boolean).join('. ');

    if (name) {
      entries.push({ category: 'team', title: name, text, url: 'team.html' });
    }
  });

  // Mini cards (BTech FYP, interns, volunteers, alumni)
  $('.mini-card').each(function () {
    const name = $(this).find('h6').text().trim();
    const details = [];
    $(this).find('.text-muted, p.text-muted').each(function () {
      const t = $(this).text().trim();
      if (t) details.push(t);
    });

    // Try to determine context from parent accordion/section
    let context = '';
    const accordionBtn = $(this).closest('.accordion-collapse')
      .prev('.accordion-header').find('.accordion-button');
    if (accordionBtn.length) {
      context = accordionBtn.clone().children('.badge').remove().end().text().trim();
    }
    const section = $(this).closest('.row').prevAll('.team-section-title').first();
    if (section.length) {
      const sectionText = section.clone().children('i, .badge').remove().end().text().trim();
      if (sectionText && !context.includes(sectionText)) {
        context = sectionText + (context ? ' ' + context : '');
      }
    }

    const text = [context, ...details].filter(Boolean).join('. ');

    if (name) {
      entries.push({ category: 'team', title: name, text, url: 'team.html' });
    }
  });

  return entries;
}

// ── Projects ────────────────────────────────────────
function parseProjects() {
  const html = readHTML('projects.html');
  const entries = [];

  // Extract the projects array from inline script (JSON-compatible)
  const match = html.match(/var\s+projects\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) {
    console.warn('Warning: Could not find projects array in projects.html');
    return entries;
  }

  let projects;
  try {
    projects = JSON.parse(match[1]);
  } catch (e) {
    console.warn('Warning: Could not parse projects array as JSON:', e.message);
    return entries;
  }

  projects.forEach((p, i) => {
    const url = p.page || `project-details.html?index=${i}`;
    const status = p.status || '';
    const text = [p.description, p.details, status].filter(Boolean).join('. ');

    entries.push({ category: 'project', title: p.title, text, url });
  });

  return entries;
}

// ── Main ────────────────────────────────────────────
function main() {
  console.log('Building search index...');

  const publications = parsePublications();
  console.log(`  Publications: ${publications.length}`);

  const news = parseNews();
  console.log(`  News: ${news.length}`);

  const team = parseTeam();
  console.log(`  Team: ${team.length}`);

  const projects = parseProjects();
  console.log(`  Projects: ${projects.length}`);

  const all = [...publications, ...news, ...team, ...projects];
  console.log(`  Total: ${all.length} entries`);

  // Escape single quotes in strings for JS output
  function esc(s) {
    return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  }

  // Generate JS output
  const lines = [
    '/**',
    ' * UbiSys Search Index (auto-generated)',
    ' * ------------------------------------',
    ' * DO NOT EDIT MANUALLY — this file is regenerated by:',
    ' *   node scripts/build-search-index.js',
    ' *',
    ' * It runs automatically via GitHub Actions on every push',
    ' * and weekly. To update search content, edit the source',
    ' * HTML pages directly.',
    ' */',
    'window.UBISYS_SEARCH_INDEX = ['
  ];

  all.forEach((entry, idx) => {
    const parts = [
      `category:'${entry.category}'`,
      `title:'${esc(entry.title)}'`,
      `text:'${esc(entry.text)}'`,
      `url:'${esc(entry.url)}'`
    ];
    if (entry.year) parts.push(`year:'${entry.year}'`);
    const comma = idx < all.length - 1 ? ',' : '';
    lines.push(`  {${parts.join(', ')}}${comma}`);
  });

  lines.push('];');
  lines.push('');

  fs.writeFileSync(OUT, lines.join('\n'), 'utf8');
  console.log(`Written to ${path.relative(ROOT, OUT)}`);
}

main();

// assets/js/publications.js

fetch('data/publications.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('publication-list');
    data.forEach(pub => {
      const card = document.createElement('div');
      card.className = 'col-md-6';

      card.innerHTML = `
        <div class="card card-custom h-100">
          <div class="card-body">
            <h5 class="card-title">${pub.title}</h5>
            <p class="card-text">
              <strong>Authors:</strong> ${pub.authors}<br>
              <strong>Venue:</strong> ${pub.venue} (${pub.year})<br>
              ${pub.link ? `<a href="${pub.link}" target="_blank">View Paper</a>` : ''}
            </p>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById('publication-list').innerHTML =
      '<p class="text-danger">Failed to load publications.</p>';
    console.error('Error loading publications:', error);
  });

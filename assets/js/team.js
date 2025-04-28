// assets/js/team.js

fetch('data/team.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('team-grid');
    data.forEach(member => {
      const card = document.createElement('div');
      card.className = 'col-md-4';

      card.innerHTML = `
        <div class="card card-custom h-100 text-center">
          <img src="${member.image}" class="card-img-top" alt="${member.name}">
          <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.role}</p>
            ${member.email ? `<p><a href="mailto:${member.email}">${member.email}</a></p>` : ''}
            ${member.website ? `<a href="${member.website}" target="_blank">Website</a>` : ''}
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById('team-grid').innerHTML =
      '<p class="text-danger">Failed to load team members.</p>';
    console.error('Error loading team:', error);
  });

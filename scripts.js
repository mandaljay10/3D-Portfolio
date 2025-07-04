document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/projects.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('project-list');
      data.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project';
        div.innerHTML = `
          <h3>${project.title}</h3>
          <img src="${project.image}" alt="${project.title}">
          <p>${project.description}</p>
          <model-viewer 
            src="${project.model}" 
            alt="${project.title}"
            ar 
            auto-rotate 
            camera-controls 
            poster="${project.image}"
            style="width: 100%; height: 400px;">
          </model-viewer>
        `;
        container.appendChild(div);
      });
    });

  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  fetch('resume.json')
    .then(response => response.json())
    .then(data => {
      // Render Header
      document.getElementById('header-name').textContent = data.header.name;
      document.getElementById('header-subtitle').textContent = data.header.subtitle;

      // Render Contact Information
      const contactSection = document.getElementById('contact-section');
      contactSection.innerHTML = `
        <div class="section-title">Contact</div>
        <div class="contact-item"><strong>Address:</strong> ${data.contact.address}</div>
        <div class="contact-item"><strong>Phone:</strong> ${data.contact.phone}</div>
        <div class="contact-item"><strong>Email:</strong> <a href="mailto:${data.contact.email}">${data.contact.email}</a></div>
      `;

      // Render Education
      const educationSection = document.getElementById('education-section');
      educationSection.innerHTML = '<div class="section-title">Education</div>';
      data.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'meta-event';
        eduDiv.innerHTML = `
          <div class="meta-title">${edu.date}</div>
          <div class="meta-subtitle">${edu.degree}</div>
          <div class="meta-institution">${edu.institution}</div>
          <div class="meta-description">${edu.description}</div>
        `;
        educationSection.appendChild(eduDiv);
      });

      // Render Work Experience
      const workSection = document.getElementById('work-experience-section');
      workSection.innerHTML = '<div class="section-title">Work Experience</div>';
      data.workExperience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.className = 'cvevent';
        expDiv.innerHTML = `
          <div class="cvevent-header">
            <div class="position">${exp.position}</div>
            <div class="timeframe">${exp.timeframe}</div>
          </div>
          <div class="cvevent-company">${exp.company}</div>
          <div class="cvevent-description">
            <p class="cvevent-summary"><u><strong>Summary:</strong></u> ${exp.summary}</p>
            <ul>
              ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            <details class="technologies">
              <summary><u><strong>Technologies:</strong></u> ${exp.technologies.join(', ')}</summary>
            </details>
          </div>
        `;
        workSection.appendChild(expDiv);
      });
    })
    .catch(error => console.error('Error loading resume data:', error));
});

// Theme handling
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});

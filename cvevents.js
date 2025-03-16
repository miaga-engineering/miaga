// cvevents.js

document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with the company class within each CV event
  const companyElements = document.querySelectorAll('.cvevent-company');

  // Attach a click event listener to each company element
  companyElements.forEach(function(companyEl) {
    companyEl.addEventListener('click', function() {
      // Find the nearest parent container with the 'cvevent' class
      const cveventContainer = companyEl.closest('.cvevent');
      if (cveventContainer) {
        // Find all <details> elements inside the corresponding cvevent-description
        const detailsElements = cveventContainer.querySelectorAll('.cvevent-description details');
        // Set the open property to true for each details element
        detailsElements.forEach(function(detail) {
          detail.open = true;
        });
      }
    });
  });
});

// cvevents.js



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
  
          // Check if at least one <details> element is open
          const isAnyOpen = Array.from(detailsElements).some(detail => detail.open);
  
          // Toggle state: Close if any is open, otherwise open all
          detailsElements.forEach(function(detail) {
            detail.open = !isAnyOpen;
          });
        }
      });
    });
  });


document.addEventListener('DOMContentLoaded', function() {
    // Select all summary elements that should toggle summary details
    const summaryElements = document.querySelectorAll('.cvevent-summary');
  
    summaryElements.forEach(function(summaryEl) {
      // Look for the <u> element that wraps the "Summary:" text
      const uElement = summaryEl.querySelector('u');
      const indicator = document.createElement('span');
      indicator.classList.add('toggle-indicator');
      // Insert plus sign
      indicator.textContent = '+ ';
      // Use CSS variable for color
      indicator.style.color = 'var(--company-name-color)';
      indicator.style.cursor = 'pointer';
  
      // Insert the indicator before the <u> element (so it appears before "Summary:")
      if (uElement) {
        summaryEl.insertBefore(indicator, uElement);
      } else {
        summaryEl.insertBefore(indicator, summaryEl.firstChild);
      }
  
      // Add click listener on the summary element
      summaryEl.addEventListener('click', function(event) {
        // Prevent event propagation if needed
        event.stopPropagation();
  
        // Find the closest parent CV event container
        const cveventContainer = summaryEl.closest('.cvevent');
        if (cveventContainer) {
          // Target only details within the summary-details container
          const summaryDetails = cveventContainer.querySelector('.summary-details');
          if (summaryDetails) {
            const detailsElements = summaryDetails.querySelectorAll('details');
            // Check if any are open
            const isAnyOpen = Array.from(detailsElements).some(detail => detail.open);
            // Toggle each detail: open all if closed, close all if any are open
            detailsElements.forEach(function(detail) {
              detail.open = !isAnyOpen;
            });
            // Update the indicator: minus if details are open, plus if closed
            indicator.textContent = isAnyOpen ? '+ ' : '- ';
          }
        }
      });
    });
  });
  

// skills.js
function getExperienceYears() {
  // March 1, 2005 (months are 0-indexed, so 2 means March)
  const startDate = new Date(2005, 2, 1);
  const now = new Date();
  let yearsDiff = now.getFullYear() - startDate.getFullYear();
  
  // Adjust if the current date hasn't reached the anniversary date yet
  if (
    now.getMonth() < startDate.getMonth() || 
    (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())
  ) {
    yearsDiff--;
  }
  
  return yearsDiff;
}
// Define an array of categories. Each category has a name and a list of skills.
// Every skill object now includes a subSkills array.
const skillCategories = [
  {
    category: 'Industry',
    skills: [
      {
        name: 'Oil and Gas',
        percentage: 76,
        description: 'Experience from Oil and Gas Industry and levels of expertise',
        subSkills: [
          { name: 'ABB AS', percentage: 100 },
          { name: 'Schlumberger', percentage: 60 }     
        ]
      },
      {
        name: 'Power and Utilities',
        percentage: 80,
        description: 'Experience from Power Industry and levels of expertise',
        subSkills: [
          { name: 'ABB AS', percentage: 90 }
      
        ]
      },
      {
        name: 'Petrochemical and Chemical',
        percentage: 60,
        description: 'Experience from Chemical Industry and levels of expertise',
        subSkills: [
          { name: 'Yara - Nitric Acid', percentage: 70 },
          { name: 'Yara - Ammonia', percentage: 50 },
          { name: 'Borealis - Poly Propylene', percentage: 80 },
          { name: 'Borealis - Poly Ethylene', percentage: 70 },
          
        ]
      },
      {
        name: 'Industrial Automation',
        percentage: 100,
        description: 'Experience from Automation Industry and levels of expertise',
        subSkills: [
          { name: 'Yara', percentage: 80 },
          { name: 'Borealis', percentage: 80 },
          { name: 'ABB AS', percentage: 100 },
          { name: 'ÅF', percentage: 70 },
        ]
      },
      {
        name: 'Crypto/Fintech',
        percentage: 50,
        description: 'Experience from Fintech Industry and levels of expertise',
        subSkills: [
          { name: 'Ramp Network', percentage: 50 },
        ]
      },
      {
        name: 'Electric Vehicles',
        percentage: 50,
        description: 'Experience from Automotive Industry and levels of expertise',
        subSkills: [
          { name: 'NEVS', percentage: 50 }
        ]
      }
    ]
  },
  {
    category: 'Technical Skills',
    skills: [
      {
        name: 'Process Control',
        percentage: 80,
        subSkills: [
          { name: 'Modeling and Simulation (Yara/Borealis)', percentage: 80 },
          { name: 'Real Time Optimization (Yara)', percentage: 80 },
          { name: 'Model Predictive Control (Yara/Borealis)', percentage: 80 },
          { name: 'Basic Process Control (ABB AS/ABB AB/Borealis)', percentage: 80 },
          { name: 'Advanced Regulatory Control (Yara/Borealis)', percentage: 80 },
        ]
      },
      {
        name: 'Functional Safety',
        percentage: 90,
        subSkills: [
          { name: 'Safety Instrumented Function (ABB AS)', percentage: 90 },
          { name: 'IEC 61508/IEC 61511 (ABB AS)', percentage: 90 },
          { name: 'Change and Configuation Management (ABB AS/NEVS)', percentage: 100 },
          { name: 'ISO 26262 (NEVS)', percentage: 60 },
          { name: 'SIL1-3 Application Develpment (ABB AB)', percentage: 90 },
        ]
      },
      {
        name: 'Programming Languages',
        percentage: 70,
        subSkills: [
          { name: 'Python (Yara/Ramp/Borealis,NEVS)', percentage: 80 },
          { name: 'Fortran (Borealis)', percentage:70},
          { name: 'Sharepoint (NEVS/ABB AS)', percentage: 70},
          { name: 'C# (NEVS)', percentage: 20},
          { name: 'SQL (RAMP/Borealis)', percentage: 70},
          { name: 'IEC 61131 (ABB AS/ABB AB)', percentage: 80},
        ]
      },
      {
        name: 'Python',
        percentage: 80,
        subSkills: [
          { name: 'Data analysis Pandas (Yara)', percentage: 95 },
          { name: 'Scientific Computing Scipy/CasADI (Yara/Borealis)', percentage: 70 },
          { name: 'Machine Learning/AI PINNs Scikit-learn/PyTorch (Yara)', percentage: 30 },
          { name: 'Data Visualization Plotly/Seaborn/Bokeh (Yara/Ramp)', percentage:80},
          { name: 'Forecasting Prophet/Statsmodels/Statforecast (Ramp)', percentage: 50},
          { name: 'Task Automation (Borealis)', percentage: 80 },
          { name: 'Simulation and Control Scipy/CasADI/Gekko (Yara/Borealis)', percentage: 80 },
        ]
      },
      {
        name: 'Quality Assurance',
        percentage: 95,
        subSkills: [
          { name: 'Automatic Testing (ABB AS/ABB AB)', percentage: 90 },
          { name: 'Test Design (ABB AS/ABB AB)', percentage: 90 },
          { name: 'Change and Configuation Management (ABB AS/NEVS)', percentage: 100 },

        ]
      },
      
     
      
    ]
  },
  {
    category: 'Management Skills',
    skills: [
      {
        name: 'Project Management',
        percentage: 100,
        description: 'Project Management skills and levels of expertise',
        subSkills: [
          { name: 'Scheduling (Yara/Borealis/ABB AS)', percentage: 95 },
          { name: 'Resource Allocation (ABB AS)', percentage: 90 },
          { name: 'Project Coordination (ABB AS)', percentage: 90 },
          { name: 'Change Management (NEVS/ABB AS)', percentage: 90 },
          { name: 'Contract Management (Borealis/ABB AS)', percentage: 90 },
          { name: 'Risk Management (ABB AS)', percentage: 90 },
        ]
      },
      
      {
        name: 'Configuration Management',
        percentage: 100,
        description: 'Configuation Management skills and levels of expertise',
        subSkills: [
          { name: 'Version Control', percentage: 95 },
          { name: 'Documentation', percentage: 90 }
        ]
      },

    
      {
        name: 'Functional Safety Management',
        percentage: 60,
        description: 'Functional Safety Management skills and levels of expertise',
        subSkills: [
          { name: 'Compliance', percentage: 65 },
          { name: 'Procedures', percentage: 60 }
        ]
      }
    

    ]
  }
];
  
  // Wait until the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('skills-container');
    const tooltip = document.createElement('div');
    tooltip.id = 'skill-tooltip';
    tooltip.style.position = 'absolute';
    tooltip.style.display = 'none';
    tooltip.style.background = 'rgba(0, 0, 0, 0.7)';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '5px 10px';
    tooltip.style.borderRadius = '4px';
    tooltip.style.fontSize = '12px';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.zIndex = 1000;
    document.body.appendChild(tooltip);
    // Loop through each category
    skillCategories.forEach(categoryObj => {
      // Create a container for this category (to group its title and skills)
      const categoryContainer = document.createElement('div');
      categoryContainer.className = 'category-container';
  
      // Create a section title container that will include the title and the expand/collapse control
      const sectionTitle = document.createElement('div');
      sectionTitle.className = 'section-title';
      sectionTitle.textContent = categoryObj.category ;
  
      // Create an expand/collapse control element (initially showing [+])
      const expandCat = document.createElement('span');
      expandCat.className = 'expand-cat';
      expandCat.textContent = ' [+]';
      // Append the control to the section title
      sectionTitle.appendChild(expandCat);
      categoryContainer.appendChild(sectionTitle);
      



  
    // Toggle the sub-skills container display
   
    
    // Toggle the sub-skills container display
    

  
        


      // Create a container for all skills in this category
      const skillsContainer = document.createElement('div');
      skillsContainer.className = 'category-skills';
  
      // Loop through each skill within the category
      categoryObj.skills.forEach(skill => {
        // Create a container for the top-level skill
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
  
        // Create the top-level skill header (name + progress bar)
        const skillHeader = document.createElement('div');
        skillHeader.className = 'skill-header clickable';
  
        // Create and append the skill name
        const skillName = document.createElement('div');
        skillName.className = 'skill-name';
        skillName.textContent = skill.name;
        skillHeader.appendChild(skillName);

        // **** HERE: Add tooltip event listeners to the skillHeader ****
        skillHeader.addEventListener('mouseenter', function(event) {
          // Set tooltip text to the skill's description (if provided)
          tooltip.textContent = skill.description || 'No description available.';
          tooltip.style.display = 'block';
        });
        skillHeader.addEventListener('mousemove', function(event) {
          // Move the tooltip near the cursor
          tooltip.style.left = event.pageX + 10 + 'px';
          tooltip.style.top = event.pageY + 10 + 'px';
        });
        skillHeader.addEventListener('mouseleave', function() {
          // Hide the tooltip when leaving
          tooltip.style.display = 'none';
        });
      // **** End tooltip event listeners ****
      
        // Create and append the main progress bar
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        const skillBarFill = document.createElement('div');
        skillBarFill.className = 'skill-bar-fill';
        skillBarFill.style.width = skill.percentage + '%';
        skillBar.appendChild(skillBarFill);
        
        const expandMarker = document.createElement('span');
        expandMarker.className = 'expand-marker';
        expandMarker.textContent = ' [+]';
        skillHeader.appendChild(expandMarker);
        // Append the header to the top-level skill container
        skillItem.appendChild(skillHeader);
        skillHeader.appendChild(skillBar);
        // Create the sub-skills container (initially hidden)
        const subSkillsContainer = document.createElement('div');
        subSkillsContainer.className = 'sub-skills-container';
        subSkillsContainer.style.display = 'none';
  
        // Loop through each sub-skill for this skill
        skill.subSkills.forEach(sub => {
          const subSkillItem = document.createElement('div');
          subSkillItem.className = 'sub-skill-item';
  
          // Create and append the sub-skill name (styled, e.g., italic and smaller)
          const subSkillName = document.createElement('div');
          subSkillName.className = 'sub-skill-name';
          subSkillName.textContent = sub.name;
          subSkillItem.appendChild(subSkillName);
  
          // Create and append the sub-skill progress bar
          const subSkillBar = document.createElement('div');
          subSkillBar.className = 'skill-bar';
          const subSkillBarFill = document.createElement('div');
          subSkillBarFill.className = 'skill-bar-fill';
          subSkillBarFill.style.width = sub.percentage + '%';
          // For a slightly transparent background color, e.g.:
          subSkillBarFill.style.backgroundColor = 'var(--skill-bar-fill-color)';
          subSkillBar.appendChild(subSkillBarFill);
          subSkillItem.appendChild(subSkillBar);
  
          // Append the sub-skill item to the container
          subSkillsContainer.appendChild(subSkillItem);
        });
  
        // Toggle the display of the sub-skills container when clicking the header
        skillHeader.addEventListener('click', function() {
          subSkillsContainer.style.display = (subSkillsContainer.style.display === 'none' || subSkillsContainer.style.display === '') ? 'block' 
            : 'none';
        });

       
  
        // Append the sub-skills container to the top-level skill container
        skillItem.appendChild(subSkillsContainer);
  
        // Append the complete top-level skill container to the category skills container
        skillsContainer.appendChild(skillItem);
      });
  
      // Append the skills container to the category container
      categoryContainer.appendChild(skillsContainer);
  
      // Add an event listener to the expand-all control to toggle all sub-skill containers in this category
      expandCat.addEventListener('click', function(event) {
        // Prevent the click from bubbling up to the section title if necessary
        event.stopPropagation();
  
        // Determine whether we are expanding or collapsing
        // We'll expand if at least one sub-skills container is hidden.
        const subContainers = skillsContainer.querySelectorAll('.sub-skills-container');
        let expand = false;
        subContainers.forEach(subCont => {
          if (subCont.style.display === 'none' || subCont.style.display === '') {
            expand = true;
          }
        });
  
        // Toggle display for each sub-skills container
        subContainers.forEach(subCont => {
          subCont.style.display = expand ? 'block' : 'none';
        });
  
        // Update the expandCat control text accordingly
        expandCat.textContent = expand ? ' [-]' : ' [+]';
      });
  
      // Append the complete category container to the main container
      container.appendChild(categoryContainer);
    });

    
  });
  
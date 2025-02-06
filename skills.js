// skills.js

// Define an array of categories. Each category has a name and a list of skills.
// Every skill object now includes a subSkills array.
const skillCategories = [
    {
      category: 'Business',
      skills: [
        {
          name: 'Oil and Gas',
          percentage: 76,
          subSkills: [
            { name: 'Automation', percentage: 100 },
            { name: 'Production', percentage: 80 },
            { name: 'FPSO', percentage: 80 },
            { name: 'Functional Safety', percentage: 70 },
            { name: 'Exploration', percentage: 50 }
            
          ]
        },
        {
          name: 'Power and Utilities',
          percentage: 100,
          subSkills: [
            { name: 'Generation', percentage: 95 },
            { name: 'Distribution', percentage: 85 }
          ]
        },
        {
          name: 'Petrochemical (5+ yrs)',
          percentage: 80,
          subSkills: [
            { name: 'Process Optimization', percentage: 75 },
            { name: 'Quality Control', percentage: 70 }
          ]
        },
        {
          name: 'Software Development (5+ yrs)',
          percentage: 100,
          subSkills: [
            { name: 'Front-end', percentage: 90 },
            { name: 'Back-end', percentage: 85 }
          ]
        },
        {
          name: 'Crypto/Fintech (5+ yrs)',
          percentage: 20,
          subSkills: [
            { name: 'Blockchain', percentage: 25 },
            { name: 'Smart Contracts', percentage: 20 }
          ]
        },
        {
          name: 'Electric Vehicles (5+ yrs)',
          percentage: 25,
          subSkills: [
            { name: 'Battery Management', percentage: 30 },
            { name: 'Powertrain', percentage: 20 }
          ]
        }
      ]
    },
    {
      category: 'Technical Skills',
      skills: [
        {
          name: 'Optimal Process Control',
          percentage: 100,
          subSkills: [
            { name: 'Modeling', percentage: 95 },
            { name: 'Simulation', percentage: 90 }
          ]
        },
        {
          name: 'Functional Safety',
          percentage: 100,
          subSkills: [
            { name: 'Risk Analysis', percentage: 95 },
            { name: 'Standards Compliance', percentage: 90 }
          ]
        },
        {
          name: 'Optimization',
          percentage: 100,
          subSkills: [
            { name: 'Algorithm Design', percentage: 90 },
            { name: 'Performance Tuning', percentage: 85 }
          ]
        },
        {
          name: 'Non-Linear MPC',
          percentage: 100,
          subSkills: [
            { name: 'Predictive Modeling', percentage: 90 },
            { name: 'Real-Time Control', percentage: 85 }
          ]
        },
        {
          name: 'Python (scipy/numpy/pandas)',
          percentage: 100,
          subSkills: [
            { name: 'Data Analysis', percentage: 95 },
            { name: 'Scientific Computing', percentage: 90 }
          ]
        },
        {
          name: 'Python (statsmodels)',
          percentage: 100,
          subSkills: [
            { name: 'Statistical Modeling', percentage: 90 },
            { name: 'Forecasting', percentage: 85 }
          ]
        },
        {
          name: 'Python data viz (plotly/seaborn)',
          percentage: 20,
          subSkills: [
            { name: 'Dashboarding', percentage: 25 },
            { name: 'Data Storytelling', percentage: 20 }
          ]
        },
        {
          name: 'Python (sklearn/keras)',
          percentage: 40,
          subSkills: [
            { name: 'Machine Learning', percentage: 45 },
            { name: 'Deep Learning', percentage: 40 }
          ]
        },
        {
          name: 'SQL',
          percentage: 60,
          subSkills: [
            { name: 'Query Optimization', percentage: 65 },
            { name: 'Database Design', percentage: 60 }
          ]
        }
      ]
    },
    {
      category: 'Management Skills',
      skills: [
        {
          name: 'Project Planning (5+ yrs)',
          percentage: 100,
          subSkills: [
            { name: 'Scheduling', percentage: 95 },
            { name: 'Resource Allocation', percentage: 90 }
          ]
        },
        {
          name: 'Change Mgmt (5+ yrs)',
          percentage: 100,
          subSkills: [
            { name: 'Stakeholder Engagement', percentage: 90 },
            { name: 'Risk Mitigation', percentage: 85 }
          ]
        },
        {
          name: 'Configuration Mgmt (5+ yrs)',
          percentage: 100,
          subSkills: [
            { name: 'Version Control', percentage: 95 },
            { name: 'Documentation', percentage: 90 }
          ]
        },
        {
          name: 'Project Coordination (5+ yrs)',
          percentage: 100,
          subSkills: [
            { name: 'Team Communication', percentage: 95 },
            { name: 'Meeting Facilitation', percentage: 90 }
          ]
        },
        {
          name: 'Project Mgmt (5+ yrs)',
          percentage: 80,
          subSkills: [
            { name: 'Budgeting', percentage: 75 },
            { name: 'Risk Management', percentage: 70 }
          ]
        },
        {
          name: 'Functional Safety Mgmt (5+ yrs)',
          percentage: 60,
          subSkills: [
            { name: 'Compliance', percentage: 65 },
            { name: 'Training', percentage: 60 }
          ]
        },
        {
          name: 'Risk Mgmt (5+ yrs)',
          percentage: 60,
          subSkills: [
            { name: 'Risk Assessment', percentage: 65 },
            { name: 'Mitigation Strategies', percentage: 60 }
          ]
        },
        {
          name: 'Legal/Contract Mgmt (5+ yrs)',
          percentage: 60,
          subSkills: [
            { name: 'Contract Negotiation', percentage: 65 },
            { name: 'Compliance', percentage: 60 }
          ]
        },
        {
          name: 'Cost Mgmt (5+ yrs)',
          percentage: 60,
          subSkills: [
            { name: 'Budget Tracking', percentage: 65 },
            { name: 'Cost Optimization', percentage: 60 }
          ]
        }
      ]
    }
  ];
  
  // Wait until the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('skills-container');
  
    // Loop through each category
    skillCategories.forEach(categoryObj => {
      // Create a container for this category (to group its title and skills)
      const categoryContainer = document.createElement('div');
      categoryContainer.className = 'category-container';
  
      // Create a section title container that will include the title and the expand/collapse control
      const sectionTitle = document.createElement('div');
      sectionTitle.className = 'section-title';
      sectionTitle.textContent = categoryObj.category;
  
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
          subSkillBarFill.style.backgroundColor = 'rgba(0,100,200,0.4)';
          subSkillBar.appendChild(subSkillBarFill);
          subSkillItem.appendChild(subSkillBar);
  
          // Append the sub-skill item to the container
          subSkillsContainer.appendChild(subSkillItem);
        });
  
        // Toggle the display of the sub-skills container when clicking the header
        skillHeader.addEventListener('click', function() {
          subSkillsContainer.style.display = (subSkillsContainer.style.display === 'none' || subSkillsContainer.style.display === '') 
            ? 'block' 
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
  
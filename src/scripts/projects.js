// ================================
// PROJECTS.JS - Project Filtering
// ================================

document.addEventListener('DOMContentLoaded', function() {
  initializeProjectFilters();
});

// ==================== PROJECT FILTERING ====================

function initializeProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.getElementById('projects-grid');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects (this is a placeholder - replace with actual filtering logic)
      filterProjects(filterValue);
    });
  });
}

function filterProjects(category) {
  // This function would filter projects based on category
  // In the actual implementation, this would:
  // 1. Load data from JSON
  // 2. Filter based on category
  // 3. Update the grid with filtered results
  
  console.log('Filtering projects by category:', category);
  
  // Placeholder: Add animation effect to grid
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.style.opacity = '0.5';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transition = 'opacity 0.3s ease-out';
    }, 50);
  });
}

// ==================== PROJECT CARD INTERACTION ====================

document.addEventListener('click', function(e) {
  const projectCard = e.target.closest('.project-card');
  if (projectCard) {
    // Add hover effect or redirect to project detail page
    handleProjectCardClick(projectCard);
  }
});

function handleProjectCardClick(card) {
  // This would typically navigate to a project detail page
  // For now, just add a visual effect
  card.style.transform = 'scale(1.02)';
  setTimeout(() => {
    card.style.transform = 'scale(1)';
  }, 200);
}

// ==================== PLACEHOLDER PROJECT DATA ====================
// This is where you would load actual project data from JSON

const projectsData = [
  // Example structure - replace with actual project data
  // {
  //   id: 'project-1',
  //   title: 'Project Title',
  //   slug: 'project-slug',
  //   category: 'Brand Visual Design',
  //   thumbnail: '/images/project-thumb.jpg',
  //   description: 'Project description'
  // }
];

// Function to render projects from data
function renderProjects(projects) {
  const projectsGrid = document.getElementById('projects-grid');
  
  // Clear existing projects (except placeholder)
  const existingCards = projectsGrid.querySelectorAll('.project-card');
  existingCards.forEach(card => {
    // Keep placeholder, remove others
    if (!card.textContent.includes('[PROJECT TITLE]')) {
      card.remove();
    }
  });
  
  // Add new project cards
  projects.forEach(project => {
    const card = createProjectCard(project);
    projectsGrid.appendChild(card);
  });
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  
  const imageHtml = project.thumbnail 
    ? `<img src="${project.thumbnail}" alt="${project.title}">`
    : `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%23f0f0f0' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3E[PROJECT IMAGE]%3C/text%3E%3C/svg%3E" alt="${project.title}">`;
  
  card.innerHTML = `
    <div class="project-card-image">
      ${imageHtml}
    </div>
    <div class="project-card-content">
      <h3 class="project-card-title">${project.title}</h3>
      <p class="project-card-description">${project.description}</p>
      <div class="project-card-meta">
        <span class="project-card-tag">${project.category}</span>
        <span class="project-card-tag">${project.year}</span>
      </div>
    </div>
  `;
  
  card.addEventListener('click', function() {
    // Navigate to project detail page
    if (project.slug) {
      window.location.href = `/pages/project-detail.html?id=${project.slug}`;
    }
  });
  
  return card;
}

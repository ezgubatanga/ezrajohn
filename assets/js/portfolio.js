/**
 * Ezra John Gubatanga Portfolio - Portfolio Filter & Search Script
 */

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("project-search");
  const projectCards = document.querySelectorAll(".portfolio-card");
  
  let currentFilter = "all";
  let searchQuery = "";

  // Set initial styles for transition animations
  projectCards.forEach(card => {
    card.style.transition = "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease";
    card.style.opacity = "1";
    card.style.transform = "scale(1)";
  });

  // Filter button click handler
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active states
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      currentFilter = btn.getAttribute("data-filter");
      applyFilters();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  /**
   * Applies the active search query and category filters to the portfolio grid.
   */
  function applyFilters() {
    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();
      const tag = card.querySelector(".portfolio-card-category").textContent.toLowerCase();

      const matchesCategory = currentFilter === "all" || category === currentFilter;
      const matchesSearch = searchQuery === "" || 
                            title.includes(searchQuery) || 
                            description.includes(searchQuery) ||
                            tag.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        // Prepare display and fade in
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        // Fade out and collapse display
        card.style.opacity = "0";
        card.style.transform = "scale(0.96)";
        // Wait for transition to complete before setting display none
        setTimeout(() => {
          // Double check criteria to prevent race condition if user types fast
          const reCheckCategory = currentFilter === "all" || category === currentFilter;
          const reCheckSearch = searchQuery === "" || 
                                title.includes(searchQuery) || 
                                description.includes(searchQuery) ||
                                tag.includes(searchQuery);
                                
          if (!reCheckCategory || !reCheckSearch) {
            card.style.display = "none";
          }
        }, 300);
      }
    });
  }
});

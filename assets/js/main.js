/**
 * Ezra John Gubatanga Portfolio - Main Script
 */

document.addEventListener("DOMContentLoaded", () => {
  // Load Header and Footer components
  loadComponent("header-placeholder", "/components/header.html", initHeader);
  loadComponent("footer-placeholder", "/components/footer.html", initFooter);
  
  // Initialize general behaviors
  initScrollReveal();
  initCardGlowEffect();
  initCounterAnimations();
});

/**
 * Loads an external HTML file and inserts it into a container, then fires a callback.
 */
function loadComponent(containerId, filePath, callback) {
  const container = document.getElementById(containerId);
  if (!container) return;

  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error(`Could not load ${filePath}: ${response.status}`);
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;
      if (callback) callback();
    })
    .catch(error => {
      console.error("Error loading component:", error);
    });
}

/**
 * Initializes navigation header behavior once injected.
 */
function initHeader() {
  const header = document.querySelector("header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");
  
  if (!header) return;

  // Add backdrop shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Highlight active page link based on URL
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute("href");
    const isHomeActive = (currentPath === "/" || currentPath === "/index.html") && href === "/";
    const isSubActive = href !== "/" && (currentPath === href || currentPath.startsWith(href));
    
    if (isHomeActive || isSubActive) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile menu burger toggle
  if (navToggle && navLinksContainer) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navToggle.classList.toggle("active");
      navLinksContainer.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navLinksContainer.classList.contains("active") && !navLinksContainer.contains(e.target) && e.target !== navToggle) {
        navToggle.classList.remove("active");
        navLinksContainer.classList.remove("active");
        document.body.classList.remove("nav-active");
      }
    });

    // Close menu when clicking a link
    links.forEach(link => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navLinksContainer.classList.remove("active");
        document.body.classList.remove("nav-active");
      });
    });

    // Clean up body class if resizing past mobile width
    window.addEventListener("resize", () => {
      if (window.innerWidth > 868) {
        navToggle.classList.remove("active");
        navLinksContainer.classList.remove("active");
        document.body.classList.remove("nav-active");
      }
    });
  }
}

/**
 * Initializes footer details.
 */
function initFooter() {
  // Can add year update automatically
  const copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
}

/**
 * Radial gradient hover glow effect on cards (inspired by Linear & Vercel)
 */
function initCardGlowEffect() {
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
}

/**
 * Scroll reveal triggers using Intersection Observer
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Trigger once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Trust metrics count-up animation when visible
 */
function initCounterAnimations() {
  const counters = document.querySelectorAll(".counter-value");
  if (counters.length === 0) return;

  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValueStr = target.getAttribute("data-target");
        
        // Check if value is numeric or has special chars
        const isNumeric = /^\d+$/.test(targetValueStr.replace(/[^\d]/g, ''));
        if (isNumeric) {
          const numberPart = parseFloat(targetValueStr.replace(/[^\d.]/g, ''));
          const suffixPart = targetValueStr.replace(/[\d.]/g, '');
          
          let count = 0;
          const duration = 2000; // ms
          const intervalTime = 20; // ms
          const steps = duration / intervalTime;
          const increment = numberPart / steps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= numberPart) {
              target.textContent = targetValueStr;
              clearInterval(timer);
            } else {
              // Format with decimals if originally had them
              const formattedCount = targetValueStr.includes('.') 
                ? count.toFixed(1) 
                : Math.floor(count);
              target.textContent = formattedCount + suffixPart;
            }
          }, intervalTime);
        } else {
          // If non-numeric (e.g. "Millions"), just show it
          target.textContent = targetValueStr;
        }
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => countObserver.observe(counter));
}

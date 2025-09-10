// Funcionalidad del menú móvil
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.style.display = isExpanded ? 'none' : 'block';
    });
  }

  // Cerrar menú al hacer clic en un enlace (móvil)
  const navLinks = navMenu?.querySelectorAll('a');
  navLinks?.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.style.display = 'none';
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Ajustar menú en redimensionamiento
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navMenu.style.display = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Funciones de utilidad para animaciones
function fadeIn(element, duration = 300) {
  element.style.opacity = '0';
  element.style.display = 'block';

  let start = performance.now();

  function animate(currentTime) {
    let elapsed = currentTime - start;
    let progress = elapsed / duration;

    if (progress < 1) {
      element.style.opacity = progress;
      requestAnimationFrame(animate);
    } else {
      element.style.opacity = '1';
    }
  }

  requestAnimationFrame(animate);
}

function fadeOut(element, duration = 300) {
  let start = performance.now();
  let startOpacity = parseFloat(element.style.opacity) || 1;

  function animate(currentTime) {
    let elapsed = currentTime - start;
    let progress = elapsed / duration;

    if (progress < 1) {
      element.style.opacity = startOpacity * (1 - progress);
      requestAnimationFrame(animate);
    } else {
      element.style.opacity = '0';
      element.style.display = 'none';
    }
  }

  requestAnimationFrame(animate);
}

// Funciones para efectos de hover en las tarjetas
document.addEventListener('DOMContentLoaded', function() {
  const teamCards = document.querySelectorAll('.team-card');

  teamCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Función para scroll suave
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Lazy loading para imágenes
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});
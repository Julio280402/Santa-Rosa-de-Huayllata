// JS unificado con comprobaciones y mejoras de accesibilidad
document.addEventListener('DOMContentLoaded', () => {
  // Botón "Descubrir más" (si existe)
  const miBoton = document.getElementById('miBoton');
  if (miBoton) {
    miBoton.addEventListener('click', () => {
      alert('¡Bienvenido a Santa Rosa de Huayllata! 🎉');
    });
  }

  // Menú responsive móvil
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    // Estado accesible
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', () => {
      const active = navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', active ? 'true' : 'false');
    });

    // Cerrar menú al hacer clic en un enlace (mejor UX)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Lógica de galería (si existe)
  const slides = document.querySelectorAll('.tornado-slide');
  const thumbs = document.querySelectorAll('.tornado-thumbnails img');

  if (slides.length > 0 && thumbs.length > 0) {
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index]?.classList.add('active');

        thumbs.forEach(t => t.classList.remove('active-thumb'));
        thumb.addEventListener('click', () => {});
        thumb.classList.add('active-thumb');
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const miBoton = document.getElementById('miBoton');

  miBoton.addEventListener('click', () => {
    alert('¡Bienvenido a Santa Rosa de Huayllata! 🎉');
  });
});

const slides = document.querySelectorAll('.tornado-slide');
const thumbs = document.querySelectorAll('.tornado-thumbnails img');

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    
    thumbs.forEach(t => t.classList.remove('active-thumb'));
    thumb.classList.add('active-thumb');
  });
});

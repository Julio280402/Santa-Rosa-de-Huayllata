// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos el botón por su ID
    const miBoton = document.getElementById('miBoton');

    // Añadimos un "escuchador" para el evento 'click'
    miBoton.addEventListener('click', () => {
        alert('¡Hiciste clic en el botón!');
    });

});
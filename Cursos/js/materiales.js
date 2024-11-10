// Código para futuras interacciones de la sección de materiales

/* Ejemplo de mensaje de bienvenida o acción
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página de materiales cargada correctamente");
});

$(document).ready(function () {
    $('.collapse').collapse();

    // Evento para subir archivo
    $('.btn-secondary').on('click', function () {
        Swal.fire({
            icon: 'success',
            title: 'Archivo subido correctamente',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50'
        });
    });
});*/



$(document).ready(function () {
    $('.btn-ingresar').on('click', function () {
        const curso = $(this).data('curso');
        window.location.href = `curso.html?curso=${encodeURIComponent(curso)}`;
    });
});

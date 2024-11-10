// Función de validación de inicio de sesión
function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Verificar si los campos están vacíos
    if (username === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Por favor, rellene todos los campos.',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50', 
            customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'custom-swal-button'
            }
        });
        return false; 
    }

    // Credenciales correctas
    const correctUsername = 'CPU';
    const correctPassword = '123';

    // Validación de credenciales
    if (username === correctUsername && password === correctPassword) {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50',
            customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'custom-swal-button'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'menu.html';
            }
        });
        return false;
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Usuario y/o Contraseña incorrecta',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50',
            customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'custom-swal-button'
            }
        });
        return false;
    }
}
// Función de manejo de cambio de contraseña
function handlePasswordChange(event) {
    event.preventDefault();

    const currentPassword = document.getElementById('contraseñaActual').value.trim();
    const newPassword = document.getElementById('nuevaContraseña').value.trim();
    const confirmPassword = document.getElementById('confirmarContraseña').value.trim();

    // Validar que los campos no estén vacíos
    if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Por favor, complete todos los campos.',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50'
        });
        return;
    }

    // Validar que las nuevas contraseñas coincidan
    if (newPassword !== confirmPassword) {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Las contraseñas no coinciden',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50'
        });
        return;
    }

    // Simulación de cambio de contraseña exitoso
    Swal.fire({
        icon: 'success',
        title: 'Contraseña actualizada correctamente',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#4CAF50'
    }).then((result) => {
        if (result.isConfirmed) {
            $('#modalCambiarContraseña').modal('hide');
            window.location.href = 'perfil.html';
        }
    });
}

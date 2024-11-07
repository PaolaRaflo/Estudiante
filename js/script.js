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
            confirmButtonColor: '#2e7d32'
        });
        return false; // Evita el envío del formulario
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
            confirmButtonColor: '#2e7d32'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'menu.html';
            }
        });
        return false;
    } else {
        // Muestra el mensaje de advertencia si las credenciales no coinciden
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Usuario y/o Contraseña incorrecta',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#2e7d32'
        });
        return false;
    }
}

function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
}

// Cierra el menú al hacer clic fuera de él
window.onclick = function(event) {
    const profileMenu = document.getElementById('profileMenu');
    if (!event.target.matches('.profile-icon')) {
        profileMenu.style.display = 'none';
    }
};

// Función de cerrar sesión
function logout() {
    // Aquí puedes añadir lógica adicional para el cierre de sesión si es necesario
    window.location.href = 'index.html';
}


/*
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

function toggleSidebar() {
    const sidebar = document.getElementById("sidebarMenu");
    sidebar.classList.toggle("collapse");
}


//OTRO NUEVO


// Función de validación de inicio de sesión
function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Por favor, rellene todos los campos.',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }

    const correctUsername = 'CPU';
    const correctPassword = '123';

    if (username === correctUsername && password === correctPassword) {
        sessionStorage.setItem('isAuthenticated', 'true');

        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50'
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
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }
}

// Función para verificar si el usuario está autenticado
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
        window.location.href = 'index.html';
    }
}

// Función para cerrar sesión
function logout() {
    sessionStorage.removeItem('isAuthenticated');
    window.location.href = 'index.html';
}


*/



//NUEVO DICE

/*
// Función de validación de inicio de sesión
function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Por favor, rellene todos los campos.',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }

    const correctUsername = 'CPU';
    const correctPassword = '123';

    if (username === correctUsername && password === correctPassword) {
        sessionStorage.setItem('isAuthenticated', 'true');

        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50'
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
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }
}

// Función para verificar si el usuario está autenticado
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
        window.location.href = 'index.html';
    }
}

// Función para cerrar sesión
function logout() {
    sessionStorage.removeItem('isAuthenticated');
    window.location.href = 'index.html';
}

// Función de manejo de cambio de contraseña
function handlePasswordChange(event) {
    event.preventDefault();

    const currentPassword = document.getElementById('contraseñaActual').value.trim();
    const newPassword = document.getElementById('nuevaContraseña').value.trim();
    const confirmPassword = document.getElementById('confirmarContraseña').value.trim();

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


/*
NUEVOOOOOOOOOOO

// Función de validación de inicio de sesión
function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Por favor, rellene todos los campos.',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }

    const correctUsername = 'CPU';
    const correctPassword = '123';

    if (username === correctUsername && password === correctPassword) {
        sessionStorage.setItem('isAuthenticated', 'true');

        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50'
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
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }
}

// Función para verificar si el usuario está autenticado
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    const currentPath = window.location.pathname;

    // Redirige a index.html si no está autenticado y no está en la página de inicio de sesión
    if (!isAuthenticated && currentPath !== '/index.html' && !currentPath.endsWith('index.html')) {
        window.location.href = '/index.html';
    }
}

// Función para cerrar sesión
function logout() {
    sessionStorage.removeItem('isAuthenticated');
    window.location.href = '/index.html';
}

// Llama a checkAuthentication en cada página cargada
window.onload = checkAuthentication;


*/
// Función de validación de inicio de sesión
function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Por favor, rellene todos los campos.',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }

    const correctUsername = 'CPU';
    const correctPassword = '123';

    if (username === correctUsername && password === correctPassword) {
        sessionStorage.setItem('isAuthenticated', 'true');

        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/menu.html';
            }
        });
        return false;
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Usuario y/o Contraseña incorrecta',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }
}

// Función para verificar si el usuario está autenticado
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    const currentPath = window.location.pathname;

    // Redirige a index.html si no está autenticado y no está en la página de inicio de sesión
    if (!isAuthenticated && !currentPath.endsWith('/index.html') && !currentPath.endsWith('index.html')) {
        window.location.href = '/index.html';
    }
}

// Función para cerrar sesión
function logout() {
    sessionStorage.removeItem('isAuthenticated');
    window.location.href = '/index.html';
}

// Llama a checkAuthentication en cada página cargada, excepto en index.html
if (!window.location.pathname.endsWith('/index.html') && !window.location.pathname.endsWith('index.html')) {
    window.onload = checkAuthentication;
}

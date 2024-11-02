function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'usuarioCPU';
    const correctPassword = 'contraseña123';

    if (username === correctUsername && password === correctPassword) {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#2e7d32'
        });
        return true;
    } else {
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
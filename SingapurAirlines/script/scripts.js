// Función para validar el formulario de inicio de sesión (tv1.html)
document.querySelector('.main-btn')?.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
        alert("Por favor, complete ambos campos.");
    } else if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
    } else {
        alert("Inicio de sesión exitoso.");
    }
});

// Función para validar el formulario de recuperación de cuenta (tv2.html)
document.getElementById('send-code')?.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const codigo = document.getElementById('codigo').value;

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresión regular para validar el número de celular (ejemplo simple)
    const celularRegex = /^\d{10}$/;

    if (!email || !celular || !codigo) {
        alert("Por favor, complete todos los campos.");
    } else if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
    } else if (!celularRegex.test(celular)) {
        alert("Por favor, ingrese un número de celular válido (10 dígitos).");
    } else {
        alert("Código enviado correctamente.");
    }
});

// Función para validar el formulario de creación de cuenta (tv3.html)
document.getElementById('crear-cuenta')?.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const celularRegex = /^\d{10}$/;

    if (!nombre || !apellido || !email || !celular || !password || !confirmPassword) {
        alert("Por favor, complete todos los campos.");
    } else if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
    } else if (!celularRegex.test(celular)) {
        alert("Por favor, ingrese un número de celular válido (10 dígitos).");
    } else if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
    } else {
        alert("Cuenta creada con éxito.");
    }
});

// Función para validar la edición del perfil (tv5.html)
document.getElementById('guardar-perfil')?.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const celularRegex = /^\d{10}$/;

    if (!nombre || !apellido || !email || !celular || !password || !confirmPassword) {
        alert("Por favor, complete todos los campos.");
    } else if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
    } else if (!celularRegex.test(celular)) {
        alert("Por favor, ingrese un número de celular válido (10 dígitos).");
    } else if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
    } else {
        alert("Perfil guardado con éxito.");
    }
});

// Función para navegación en la pantalla de administración de usuarios y vuelos (tv6.html)
document.getElementById('admin-button')?.addEventListener('click', function () {
    alert("Navegando a Administración de Usuarios");
    this.style.transition = 'transform 0.3s ease';
    this.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        this.style.transform = 'translateY(0)';
    }, 300);
});

document.getElementById('flight-button')?.addEventListener('click', function () {
    alert("Navegando a Gestión de Vuelos");
    this.style.transition = 'transform 0.3s ease';
    this.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        this.style.transform = 'translateY(0)';
    }, 300);
});





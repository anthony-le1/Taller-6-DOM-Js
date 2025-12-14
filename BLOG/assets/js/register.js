const formRegistro = document.getElementById("registroForm");

formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
        nombres: document.getElementById("nombres").value.trim(),
        apellidos: document.getElementById("apellidos").value.trim(),
        cedula: document.getElementById("cedula").value.trim(),
        fecha: document.getElementById("fecha").value,
        email: document.getElementById("email").value.trim(),
        direccion: document.getElementById("direccion").value.trim(),
        username: document.getElementById("username").value.trim(),
        password: document.getElementById("password").value
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora inicia sesión.");
    window.location.href = "login.html";
});


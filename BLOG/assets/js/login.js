document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(u =>
        (u.email === email || u.username === email) &&
        u.password === password
    );

    if (!userFound) {
        alert("Usuario o contraseña incorrectos");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(userFound));
    window.location.href = "dashboard.html";
});



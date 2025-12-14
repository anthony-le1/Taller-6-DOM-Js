document.addEventListener("DOMContentLoaded", () => {

    // Verificar sesión
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    // Contador
    const contador = document.getElementById("proyectosCount");
    contador.textContent = `${projects.length} registrados`;

    const tabla = document.getElementById("tablaProyectos");

    if (projects.length === 0) return;

    const tbody = document.createElement("tbody");

    projects.forEach((p, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${p.titulo}</td>
            <td>${p.descripcion}</td>
            <td>
                ${p.imagen ? `<img src="${p.imagen}" width="60">` : "—"}
            </td>
        `;

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
});


console.log("projects.js cargado");

const imagenInput = document.getElementById("imagen");
const preview = document.getElementById("preview");
const form = document.getElementById("projectForm");

imagenInput.addEventListener("change", () => {
    const file = imagenInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
        preview.src = e.target.result;
        preview.classList.add("show");
    };
    reader.readAsDataURL(file);
});

form.addEventListener("submit", e => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;

    if (!titulo || !descripcion) {
        alert("Completa todos los campos");
        return;
    }

    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.push({
        id: Date.now(),
        titulo,
        descripcion,
        imagen: preview.src || ""
    });

    localStorage.setItem("projects", JSON.stringify(projects));

    alert("Proyecto guardado correctamente");
    window.location.href = "dashboard.html";
});




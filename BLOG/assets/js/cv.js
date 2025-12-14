document.addEventListener("DOMContentLoaded", () => {
    const btnCv = document.getElementById("btnCv");
    const cvContainer = document.getElementById("cvContainer");

    btnCv.addEventListener("click", () => {

        cvContainer.innerHTML = `
            <div class="cv-wrapper">
                <h2 style="text-align:center">Anthony Ledesma</h2>
                <p style="text-align:center;color:gray">
                    Desarrollador de Software
                </p>

                <hr>

                <h3>Perfil Profesional</h3>
                <p>
                    Apasionado por la tecnología y el desarrollo de software,
                    enfocado en la creación de interfaces modernas y funcionales.
                </p>

                <h3>Habilidades</h3>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Diseño de Interfaces</li>
                    <li>DOM y LocalStorage</li>
                    <li>Inglés - B2</li>
                    <li>Aleman - A2</li>
                </ul>

                <h3>Educación</h3>
                <p>Escuela Politécnica Nacional – ESFOT</p>
                <p>Sindicato de Choferes profesionales de Pichincha - Licencia Tipo C</p>

                <button id="cerrarCv" class="btn" style="margin-top:20px">
                    Cerrar
                </button>
            </div>
        `;

        cvContainer.classList.add("open");

        document.getElementById("cerrarCv").addEventListener("click", () => {
            cvContainer.classList.remove("open");
        });
    });
});




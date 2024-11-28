document.addEventListener("DOMContentLoaded", function () {
    const ingresarButtons = document.querySelectorAll(".btn-ingresar");

    ingresarButtons.forEach((button) => {
        button.addEventListener("click", function () {
            alert(`Ingresando al curso: ${this.parentElement.querySelector(".card-title").textContent}`);
        });
    });
});


const courses = [
    { name: "ÁLGEBRA", area: "Ciencias" },
    { name: "ARITMÉTICA", area: "Ciencias" },
    { name: "FÍSICA", area: "Ciencias" },
    { name: "GEOMETRÍA", area: "Ciencias" },
    { name: "TRIGONOMETRÍA", area: "Ciencias" },
    { name: "RAZONAMIENTO MATEMÁTICO", area: "Ciencias" },
    { name: "BIOLOGÍA", area: "Ciencias" },
    { name: "QUÍMICA", area: "Ciencias" },
    { name: "HISTORIA", area: "Letras" },
    { name: "ECONOMÍA", area: "Letras" },
    { name: "GEOGRAFÍA", area: "Letras" },
    { name: "CÍVICA", area: "Letras" },
    { name: "PSICOLOGÍA", area: "Letras" },
    { name: "FILOSOFÍA", area: "Letras" },
    { name: "RAZONAMIENTO VERBAL", area: "Letras" },
    { name: "LITERATURA", area: "Letras" },
    { name: "CULTURA GENERAL", area: "Letras" },
];

function loadCourses() {
    const container = document.getElementById("course-container");
    let html = "";

    courses.forEach((course) => {
        html += `
            <div class="col-md-4 col-sm-6 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="card-title mb-0">${course.name}</h6>
                        </div>
                        <a href="cursosEst.html?course=${encodeURIComponent(course.name)}" class="btn btn-sm btn-success">INGRESAR</a>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", loadCourses);

document.addEventListener("DOMContentLoaded", function() {
    // Mostrar solo la primera sección al cargar
    document.querySelector("#sobre-mi").classList.add("active");

    // Obtener todos los botones del menú
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Ocultar todas las secciones
            document.querySelectorAll(".section").forEach(section => {
                section.classList.remove("active");
            });

            // Mostrar la sección correspondiente al botón presionado
            const sectionId = this.getAttribute("data-section");
            document.getElementById(sectionId).classList.add("active");
        });
    });
});

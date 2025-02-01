document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".section");
    const proyectoButtons = document.querySelectorAll(".proyecto-btn");
    const proyectosDetalles = document.querySelectorAll(".proyecto-detalle");

    // Mostrar la sección seleccionada y ocultar las demás
    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-section");

            sections.forEach(section => {
                section.style.display = section.id === sectionId ? "block" : "none";
            });
        });
    });

    // Ocultar todos los detalles de los proyectos por defecto
    proyectosDetalles.forEach(detalle => {
        detalle.style.display = "none";
    });

    // Mostrar detalles del proyecto seleccionado
    proyectoButtons.forEach(button => {
        button.addEventListener("click", function () {
            const proyectoId = this.getAttribute("data-proyecto");

            // Ocultar todos los proyectos
            proyectosDetalles.forEach(detalle => {
                detalle.style.display = "none";
            });

            // Mostrar el proyecto seleccionado
            const proyectoSeleccionado = document.getElementById(proyectoId);
            if (proyectoSeleccionado) {
                proyectoSeleccionado.style.display = "block";
            }
        });
    });
});

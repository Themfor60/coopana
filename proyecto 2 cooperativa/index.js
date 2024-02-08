document.addEventListener("DOMContentLoaded", function() {
    var btnForm = document.getElementById('btnForm');

    if (btnForm) {
        btnForm.addEventListener("click", function(event) {
            event.preventDefault(); 
            alert("Formulario enviado");
            
        });
    } else {
        console.error("Elemento con ID 'btnForm' no encontrado");
    }
});

const toggle = document.querySelector(".toggle");
const nvMenu = document.querySelector(".nv-menu");

toggle.addEventListener("click", () => {
    nvMenu.classList.toggle("nv-menu_visible");

});

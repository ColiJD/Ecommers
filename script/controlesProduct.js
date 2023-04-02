import { productoServices } from "./services/producServices.js";
import { validar } from "./validar.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const urlImagen = document.querySelector('[data-tipo="imagenURL"]').value;
    const categoria = document.querySelector('[data-tipo="categoria"]').value;
    const nombre = document.querySelector('[data-tipo="nombre"]').value;
    const precio = document.querySelector('[data-tipo="precio"]').value;
    const descripcion = document.querySelector('[data-tipo="descripcion"]').value;

    productoServices.guardarProducto(urlImagen, categoria, nombre, precio, descripcion).then((respuesta) => {
        window.location.href = "../screens/productosAdmi.html";
    }).catch((err) => {
        console.log(err);
    });

})

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    });
});



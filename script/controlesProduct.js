import { productoServices } from "./services/producServices.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const urlImagen = document.querySelector('[data-imagen]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    productoServices.guardarProducto(urlImagen, categoria, nombre, precio, descripcion).then((respuesta) => {
        window.location.href = "../screens/productosAdmi.html";
    }).catch((err) => {
        console.log(err);
    });

})
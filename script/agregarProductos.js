import { productoServices } from "./services/producServices.js";

const crearNuevoProducto = (imagen, nombre, precio, descripcion) => {
    const articulo_contenido = document.createElement('div');
    articulo_contenido.classList.add('articulo_contenido');

    const contenido = `
    <img class="articulo_imagen" src="${imagen}" alt="">
    <div class="articulo_productos">
        <h4 class="producto_nombre">${nombre}</h4>
        <span class="producto_precio">$${precio}</span>
        <span class="producto_nombre">${descripcion}</span>
    </div>`;
    articulo_contenido.innerHTML = contenido;
    return articulo_contenido;
};

const mostrarProductos = document.querySelector('[data-categoria="todos"]');

productoServices.listaProductos().then((data) => {
    data.forEach(({ imagen, categoria, nombre, precio, descripcion }) => {
        const imagenUrl = `https://raw.githubusercontent.com/ColiJD/Ecommers/main/assets/img/${imagen}`
        const nuevaLinea = crearNuevoProducto(imagenUrl, nombre, precio, descripcion);
        mostrarProductos.appendChild(nuevaLinea);
    });
}).catch((error) => {
    console.log(error);
});
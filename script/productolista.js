import { productoServices } from "./services/producServices.js";


const crearNuevoProducto = (imagen, nombre, precio, descripcion) => {
    const div = document.createElement('div');
    div.classList.add('articulo_contenedor');

    const contenido = ` <div class="articulo_contenido">
    <img class="articulo_imagen" src="${imagen}" alt="">
    <div class="articulo_productos">
        <h4 class="producto_nombre">${nombre}</h4>
        <span class="producto_precio">$${precio}</span>
        <span class="producto_nombre">$${descripcion}</span>
    </div>
</div>`;
    div.innerHTML = contenido;
    return div;
};

const div = document.getElementById('productos');

productoServices.listaProductos().then((data) => {
    data.forEach(({ imagen, nombre, precio, descripcion }) => {
        const nuevaLinea = crearNuevoProducto(imagen, nombre, precio, descripcion);
        div.appendChild(nuevaLinea);
    });
}).catch((error) => {
    console.log(error);
});
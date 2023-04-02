import { productoServices } from "./services/producServices.js";

const crearNuevoProducto = (imagen, nombre, precio) => {
    const articulo_contenido = document.createElement('div');
    articulo_contenido.classList.add('articulo_contenido');

    const contenido = `
    <img class="articulo_imagen" src="${imagen}" alt="">
    <div class="articulo_productos">
        <h3 class="producto_nombre">${nombre}</h3>
        <span class="producto_precio">$${precio}</span>
        <a class="producto_boton" href="./screens/detallesProducto.html">Ver Producto</a>
    </div>`;
    articulo_contenido.innerHTML = contenido;
    return articulo_contenido;
};

const star = document.querySelector('[data-categoria="star-wars"]');
const consola = document.querySelector('[data-categoria="consola"]');
const diversos = document.querySelector('[data-categoria="diversos"]');

productoServices.listaProductos().then((data) => {
    data.forEach(({ imagen, categoria, nombre, precio, descripcion }) => {
        const imagenUrl = `https://raw.githubusercontent.com/ColiJD/Ecommers/main/assets/img/${imagen}`
        const nuevaLinea = crearNuevoProducto(imagenUrl, nombre, precio, descripcion);
        if (categoria == 'Star') {
            star.appendChild(nuevaLinea);
        }
        if (categoria == 'Consola') {
            consola.appendChild(nuevaLinea);
        }
        if (categoria == 'Diversos') {
            diversos.appendChild(nuevaLinea);
        }
    });
}).catch((error) => {
    console.log(error);
});
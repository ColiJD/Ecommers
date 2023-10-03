const listaProductos = () => fetch('https://json-server-361u.onrender.com/productos').then((respuesta) => respuesta.json());

const guardarProducto = async (imagen, categoria, nombre, precio, descripcion) => {
    fetch('https://json-server-361u.onrender.com/productos', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            imagen,
            categoria,
            nombre,
            precio,
            descripcion,
            id: uuid.v4()
        }),
    }).then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body
        }
    }).catch((err) => console.error(err))

};

export const productoServices = {
    listaProductos,
    guardarProducto
}
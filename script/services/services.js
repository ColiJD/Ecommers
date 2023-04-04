const listaClientes = () => fetch('https://colijd.github.io/Ecommers/perfil').then((respuesta) => respuesta.json());



const verificarUsuario = async (email, clave) => {
    const response = await fetch('https://colijd.github.io/Ecommers/perfil', {
        method: 'GET'
    });
    const clientes = await response.json();

    const clienteExistente = clientes.find(cliente => cliente.email === email);

    if (clienteExistente) {
        if (clienteExistente.clave === clave) {
            window.location.href = './productosAdmi.html'
        } else {
            const claveInput = document.querySelector('[data-tipo="password"]');
            claveInput.classList.add('input-error');
            claveInput.value = "";
            claveInput.setAttribute('placeholder', 'Contaseña incorrecta');

        }
    } else {
        const emailInput = document.querySelector('[data-tipo="email"]')
        emailInput.classList.add('input-error');
        emailInput.value = "";
        emailInput.setAttribute('placeholder', 'Correo incorrecto');

    }
};

export const services = {
    listaClientes,
    verificarUsuario,
};

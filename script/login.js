import { services } from "./services/services.js";


const formulario = document.querySelector('[data-tipo="formulario"]');

formulario.addEventListener('submit',(event) =>{
    event.preventDefault();
    const correo = document.querySelector('[data-tipo="email"]');
    const clave = document.querySelector('[data-tipo="password"]');
    
    services.verificarUsuario(correo.value, clave.value);
})





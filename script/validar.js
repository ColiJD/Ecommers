export function validar(input) {
    const tipoDeinput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove('formulario__input--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = "";
    } else {
        input.parentElement.classList.add('formulario__input--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostarmensajeError(tipoDeinput, input);
    }

}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    " customError"
];
const mensajesDeError = {
    nombre: {
        valueMissing: 'El campo de nombre no puede estar vacio'
    },
    mensaje: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'El mensaje debe contener entre 3 y 40 caracteres'
    },
    precio: {
        valueMissing: 'El precio no puede estar vacio',
    },
    imagenURl: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'El formarto es imagen.png o jpeg'
    }

};
function mostarmensajeError(tipoDeinput, input) {
    let mensaje = ""
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeinput][error];
        }
    })

    return mensaje;
}


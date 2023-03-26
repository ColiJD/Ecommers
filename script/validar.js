export function validar(input) {
    const tipoDeinput = input.dataset.tipo
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = "";
    } else {
        input.parentElement.classList.add('input-container--invalid');
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
    email: {
        valueMissing: 'Este Campo no puede estar vacio',
        typemismatch: 'El correo no es valido'
    },
    password: {
        valueMissing: 'Este Campo no puede estar vacio',
        patternMismatch: 'Debe contener 8 o más caracteres que son de al menos un número, y una mayúscula y letra minúscula'
    },
    nacimiento: {
        valueMissing: 'Este Campo no puede estar vacio',
        customError: 'Tiene que ser mayor de edad'
    },
    numero: {
        valueMissing: 'Este Campo no puede estar vacio',
        patternMismatch: 'El formato requerido es de XXXXXXXX 8 numeros'
    },
    direccion: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'La direccion debe contener entre 10 y 40 caracteres'
    },
    ciudad: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'La ciudad debe contener entre 3 y 30 caracteres'
    },
    estado: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'El estado debe contener entre 3 y 40 caracteres'
    },
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
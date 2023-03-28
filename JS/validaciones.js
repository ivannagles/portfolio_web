export function valida(input) {
        const tipoDeInput = input.dataset.tipo;
        if (validadores[tipoDeInput]){
            validadores[tipoDeInput](input)
        }

    const tipoDeErrores = [
        "valueMissing",
        "typeMismatch",
        "patternMismatch",
        "custonError",
    ];


    const mensajesDeError = {
        nombre: {
            valueMissing: "Este campo no puede estar vacío",
            patternMismatch: "Debes ingresar al menos 6 caracteres y máximo 50"
        },
        email: {
            valueMissing: "Este campo no puede estar vacio",
            typeMismatch: "El correo no es válido"
        },
        subject: {
            valueMissing: "Este campo no puede estar vacio",
            patternMismatch: "Debes ingresar al menos 6 caracteres y máximo 50."
        },
        message: {
            valueMissing: "Este campo no puede estar vacio",
            CustomError: "Debes escribir al menos 10 caracteres y máximo 1500."
        },
       
    }
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""

    } else {
        input.parentElement.classList.add("inputcontainer--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}


function mostrarMensajeDeError(tipoDeInput, input){
    let message = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]) {
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    });
    return message;
}

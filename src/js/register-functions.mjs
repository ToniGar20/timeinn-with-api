export function emailValidationRegister(emailValue, usersLocalStorage) {
    let emailUser = emailValue.split("@")[0];
    let emailDomain = emailValue.split("@")[1];

    let notMayus = new RegExp("[A-Z]");
    let validDomain = new RegExp("[a-z]{5,10}");
    let validDomainExtension = new RegExp("\.(com|net|gov)$");
    let arrobaAndDot = new RegExp("^.[^\.]*@.{5,10}\.(com|net|gov)$")

    let emailUserSplit = emailUser.split("");

    if (emailValue.length < 2 || emailValue === "") {
        return "Introduce un E-mail valido"
    }

    // Validation starts
    for (let i = 1; i < emailUserSplit.length; i++) {
        if (emailUserSplit[i].match(notMayus)) {
            return "No puede haber mayúsculas a excepción del primer caracter"
        }
    }

    if (emailDomain !== undefined) {
        if (!emailDomain.match(validDomain)) {
            return "El dominio del email ha de tener una @ y entre 5 y 10 caracteres";
        }
    } else {
        return "Introduce un email válido"
        }
    if (!emailDomain.match(validDomainExtension)) {
        return "Las extensiones del dominio válidas son .com, .net o .gov";
    } else if (!emailValue.match(arrobaAndDot)) {
        return "El mail contiene puntos antes del arroba y no se admiten";
    } else {
        for (let i = 0; i < usersLocalStorage.length; i++) {
            if (usersLocalStorage[i].email === emailValue) {
                return "Mail registrado previamente, pruebe con uno nuevo";
                break
            }
        }
        return "E-mail valido"
    }
}

export function passwordValidationRegister(passwordValue) {
    let regExpPassword = new RegExp("^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$")

    if (passwordValue.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres";
    }else if (passwordValue.length > 16){
        return "La contraseña no debe superar los 16 caracteres";
    }else if (!passwordValue.match(regExpPassword)) {
        return "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula.";
    } else {
        return "Contraseña válida"
    }
}

export function nameValidationRegister(nameValue, lastnameValue) {
    if (nameValue.length < 2 || nameValue.length > 20 || nameValue === "") {
        return "Introduce un nombre entre 2 y 20 caracteres";
    } else if (lastnameValue.length < 2 || lastnameValue.length > 20 || lastnameValue === "") {
        return "Introduce un apellido entre 2 y 20 caracteres";
    } else {
        return "Nombre válido"
    }
}
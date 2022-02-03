import {users} from "./objects.js";
import {emailValidationRegister, nameValidationRegister, passwordValidationRegister} from "./register-functions.mjs"
import {setCookie} from "./helperfunctions.js";

for (let i = 0; i < document.getElementsByClassName("show-pass-icon eye").length; i++) {
    document.getElementsByClassName("show-pass-icon eye")[i].addEventListener("mousedown", showText);
}

for (let i = 0; i < document.getElementsByClassName("hide-pass-icon eye").length; i++) {
    document.getElementsByClassName("hide-pass-icon eye")[i].addEventListener("mouseup", hideText);
}

function showText(){
    for (let i = 0; i < document.getElementsByClassName("password").length; i++) {
        document.getElementsByClassName("password")[i].type = "text";
        document.getElementsByClassName("show-pass-icon eye")[i].style.display = "none";
        document.getElementsByClassName("hide-pass-icon eye")[i].style.display = "block";
    }
}

function hideText(){
    for (let i = 0; i < document.getElementsByClassName("password").length; i++) {
        document.getElementsByClassName("password")[i].type = "password";
        document.getElementsByClassName("show-pass-icon eye")[i].style.display = "block";
        document.getElementsByClassName("hide-pass-icon eye")[i].style.display = "none";
    }
}

export let usersLocalStorage = localStorage.getItem('users');
usersLocalStorage = JSON.parse(usersLocalStorage);


document.getElementById('email').addEventListener("focusout", () => {
    let errorVisibilityChanger = document.getElementsByClassName("error-container")[0];
    let currentInput = document.getElementById("email");
    let errorMessage = document.getElementById("error-space")

    let emailValue = document.getElementById("email").value;
    let validatedUser = emailValidationRegister(emailValue, usersLocalStorage);
    if (validatedUser !== 'E-mail valido') {
        errorVisibilityChanger.style.display = "block";
        errorMessage.innerHTML = validatedUser;
        currentInput.style["boxShadow"] = "var(--error-color) 0px 1px 20px, var(--error-color) 0px 0px 0px 2px"
    } else {
        errorVisibilityChanger.style.display = "none";
        currentInput.style["boxShadow"] = "none";
    }
});

document.getElementById("password").addEventListener("focusout", () => {
    let errorVisibilityChanger = document.getElementsByClassName("error-container")[0];
    let currentInput = document.getElementById("password");
    let errorMessage = document.getElementById("error-space");

    let passwordValue = document.getElementById("password").value;
    let validatePassword = passwordValidationRegister(passwordValue);

    if (validatePassword !== "Contraseña válida") {
        errorVisibilityChanger.style.display = "block";
        errorMessage.innerHTML = validatePassword;
        currentInput.style["boxShadow"] = "var(--error-color) 0px 1px 20px, var(--error-color) 0px 0px 0px 2px"
    } else {
        errorVisibilityChanger.style.display = "none";
        currentInput.style["boxShadow"] = "none";
    }
});


document.getElementById("register-form").addEventListener("submit", () => {
    let errorVisibilityChanger = document.getElementsByClassName("error-container")[0];
    let errorMessage = document.getElementById("error-space")

    //Taking the values and storing them into variables
    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;
    let passwordValue2 = document.getElementById("password2").value;
    let nameValue = document.getElementById("name").value
    let lastnameValue = document.getElementById("lastname").value


    /* Email, password and names validation calling respective functions that returns true if the pass the validation
    * and returns false if they not
    */
    let validateName = nameValidationRegister(nameValue, lastnameValue);
    if (validateName === "Nombre válido") {
        let validatedUser = emailValidationRegister(emailValue, usersLocalStorage)
        if (validatedUser === "E-mail valido") {
            let validatePassword = passwordValidationRegister(passwordValue);
            if (validatePassword === "Contraseña válida") {
                if (passwordValue === passwordValue2) {

                let randomId = Math.round(Math.random() * 1000)
                let fullname = nameValue + " " + lastnameValue

                fetch('http://localhost:3001/auth/register', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: emailValue,
                        password: passwordValue
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.json())
                    .then (token => {
                        console.log(token);
                        setCookie('loginToken', token.access_token, 365);
                        setCookie('userLoged', emailValue, 365);
                    })

                //users.push({id: randomId, name: nameValue, lastname: lastnameValue, email: emailValue, password: passwordValue})
                setCookie("loginSuccess", fullname, 365)
                localStorage.setItem("users", JSON.stringify(users))

                document.getElementById("registred-user").style.display = "flex"
                setTimeout('document.getElementById("registred-user").style.display = \"none\"', 2000)
                setTimeout(function (){window.location.href = './home.html'}, 2004)
                } else {
                    let currentInput = document.getElementById("password2")
                    errorVisibilityChanger.style.display = "block"
                    errorMessage.innerHTML = "Las contraseñas introducidas no coinciden"
                    currentInput.style["boxShadow"] = "var(--error-color) 0px 1px 20px, var(--error-color) 0px 0px 0px 2px"
                    currentInput.focus()
                }
            } else {
                let passwordInput = document.getElementById("password")
                errorVisibilityChanger.style.display = "block"
                errorMessage.innerHTML = validatePassword
                passwordInput.focus()
            }
        } else {
            errorVisibilityChanger.style.display = "block"
            errorMessage.innerHTML = validatedUser
            let emailInput = document.getElementById("email")
            emailInput.focus()
        }

    } else {
        errorVisibilityChanger.style.display = "block"
        errorMessage.innerHTML = validateName
        let nameInput = document.getElementById("name")
        nameInput.focus()
    }

});
import {users} from "./objects.js";
import {emailValidation, passwordValidation} from './login-functions.mjs'
localStorage.setItem("users", JSON.stringify(users));
import {setCookie, getCookie} from "./helperfunctions.js";

/**
 * When loging submited, validation process starts here
 */
document.getElementById("login-submission").addEventListener("submit", () => {
    // Inputs information
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;

    let authString = `${emailValue}:${passwordValue}`;
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(authString))

    fetch('http://localhost:3001/auth/login', {
        headers: headers,
    })
        .then(response => response.json())
        .then(token => {
                setCookie('loginToken', token.access_token, 365)
                setCookie('userLoged', token.email, 365)
            }
        )
        .catch( () => console.log("Error ocurred..."))

    if (getCookie("loginToken")) {
        window.location.href = './home.html';
    }

    // // Storing the validation of both inputs
    // let email = emailValidation(emailValue);
    // let password = passwordValidation(emailValue, passwordValue);
    //
    // // Creating and positioning the containers for the error message display
    // let errorVisibilityChanger = document.getElementsByClassName("error-container")[0];
    // let errorMessage = document.getElementById("error-space")
    //
    // // Message displaying if an error in validation happens
    // if (emailValue === "") {
    //     errorVisibilityChanger.style.display = "block";
    //     errorMessage.innerHTML = "Introduce un E-mail";
    //     emailInput.focus();
    // } else if (passwordValue === "") {
    //     errorVisibilityChanger.style.display = "block";
    //     errorMessage.innerHTML = "Introduce la contraseña";
    //     passwordInput.focus();
    // }  else if (email && password) {
    //     document.cookie = `loginSuccess=${password}; expires=Sat, 31 Dec 2022 00:00:00 UTC;path=/`;
    //     window.location.href = './home.html';
    // } else if (email && !password) {
    //     errorVisibilityChanger.style.display = "block";
    //     errorMessage.innerHTML = "La contraseña es incorrecta";
    //     passwordInput.focus();
    // } else if (!email) {
    //     errorVisibilityChanger.style.display = "block";
    //     errorMessage.innerHTML = "El E-mail introducido no está registrado";
    //     emailInput.focus();
    // }
});

/**
 * Show password listener
 */
document.getElementById("eye1").addEventListener("mousedown", () => {
    document.getElementById("password").type = "text";
    document.getElementById("eye1").style.display = "none";
    document.getElementById("eye2").style.display = "block";
});

/**
 * Hide password listener
 */
document.getElementById("eye2").addEventListener("mouseup", () => {
    document.getElementById("password").type = "password";
    document.getElementById("eye1").style.display = "block";
    document.getElementById("eye2").style.display = "none";
});

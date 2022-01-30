/**
 * Go to TOP function and button behaviour
 * @type {HTMLElement}
 */

// When the user scrolls , function called
window.onscroll = function () {
    //Get the button
    let toTopButton = document.getElementById("to-top-button");
    // If the scroll is of more than 20px, button is displayed
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

//Function shots when HTML is loaded
window.addEventListener("load", () => {
    document.getElementById("to-top-button").addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

//Showing username when he is logged
window.addEventListener("load", function () {
    takingLogInValues()
    window.addEventListener("resize", takingLogInValues)
})

function takingLogInValues() {
    let user = getCookie("loginSuccess");
    if (window.innerWidth < 800) {
        printLogIn("login-content-hamburger", user)
    } else {
        printLogIn("login-content", user)
    }
}

function printLogIn(content, user) {
    if (user !== "") {
        document.getElementsByClassName(content)[0].innerHTML =
            "<div style='display: flex'><img class=\"login\" src=\"images/Login%20User%20Icon%20PNG%20Images%20_%20Vector%20and%20PSD%20Files%20_%20Free%20Download%20on%20Pngtree.png\">" +
            `<p style="cursor: context-menu" class="p-login">${user}</p></div>` +
            "<div class=\"logout\"><i style='color: var(--main-brand-color);' class=\"fas fa-power-off\"></i><button id=logout style='border: none; cursor:pointer; background-color: inherit; color: var(--p-white)' >Salir</button></div>"
    } else {
        document.getElementsByClassName(content)[0].innerHTML =
            "<div style='display: flex'><img class=\"login\" src=\"images/Login%20User%20Icon%20PNG%20Images%20_%20Vector%20and%20PSD%20Files%20_%20Free%20Download%20on%20Pngtree.png\">" +
            "<a href=\"./login.html\" style=\"text-decoration: none\"><p class=\"p-login\">Log In</p></a></div>"
    }
}

/**
 * Code working with cookies (helper functions from w3schools)
 * Subscription form popping up after 3 seconds when page is loaded
 * After form answer (fill or close) cookie is setted as "form-subscription-answered"
 * @type {HTMLElement}
 */

//Helper function for set a cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Helper function for query a cookie
export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

window.addEventListener("load", () => {

    let user = getCookie("username");
    //If there is cookie set, form won't be displayed. Otherwise it will be
    if (user !== "") {
        document.getElementById("subscription-form-container").style.display = "none";
    } else {
        //After 3 seconds, form is visible
        setTimeout('document.getElementById("subscription-form-container").style.display = \"flex\"', 3000);
        //And a cookie will be set!
        setCookie("username", "form-subscription-answered", 365);
    }

    //Also, when "X" of the form is closed, form visibility is off
    let closeButton = document.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", function () {
        document.getElementById("subscription-form-container").style.display = "none";
    });
});

/**
 * Hamburger icon display: icon and menú content
 */
window.addEventListener("load", () => {
    let openHamburger = document.getElementById("hamburger");
    openHamburger.addEventListener("click", () => {
        document.getElementsByClassName("hamburger-container")[0].style.display = "flex";
    });

    let closeHamburger = document.getElementsByClassName("close-hamburger")[0];
    closeHamburger.addEventListener("click", function () {
        document.getElementsByClassName("hamburger-container")[0].style.display = "none";
    });
});

/**
 * Logout button listener
 */

window.addEventListener("load", () => {
    let logoutButtonClick = document.getElementById("logout");
    if (logoutButtonClick !== null) {
        logoutButtonClick.addEventListener("click", () => {
        document.cookie = `loginSuccess=; expires= 01 Jan 1970 00:00:00 UTC; path=/`;
        let currentWindow = window.location.href;
        window.location.href = currentWindow;
        });
    }
});
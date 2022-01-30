import {users} from "./objects.js";

// Following, helper functions to the validation
/**
 * Email Validation function
 * @param a -> email value
 * @returns {boolean}
 */

export function emailValidation(a) {
    let emailValidated = false;
    let usersLocalStorage = localStorage.getItem('users');
    usersLocalStorage = JSON.parse(usersLocalStorage);

    for (let i = 0; i < usersLocalStorage.length ; i++) {
        if (usersLocalStorage[i].email === a){
            return emailValidated = true;
        } else {
            emailValidated = false;
        }
    }
    return emailValidated;
}

/**
 * Password Validation function
 * @param a -> email value
 * @param b -> password value
 * @returns {string|boolean} -> the string is the value of the user name and lastname.
 */
export function passwordValidation(a, b) {
    let passwordValidated = false;
    let usersLocalStorage = localStorage.getItem('users');
    usersLocalStorage = JSON.parse(usersLocalStorage);

    for (let i = 0; i < usersLocalStorage.length ; i++) {
        if (usersLocalStorage[i].email === a){
            if (usersLocalStorage[i].password === b){
                passwordValidated = true;
                return usersLocalStorage[i].name + " " + usersLocalStorage[i].lastname;
            } else {
                passwordValidated = false;
            }
        }
    }
    return false;
}
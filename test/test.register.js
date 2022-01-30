import assert from "assert";
import {emailValidationRegister, passwordValidationRegister, nameValidationRegister} from "../src/js/register-functions.mjs";
import {users} from "../src/js/objects.js";

describe("User register", function () {
    it("Email validation", () => {
        assert.equal(emailValidationRegister("", users), "Introduce un E-mail valido")
        assert.equal(emailValidationRegister("ANTONIO@gmail.com", users), "No puede haber mayúsculas a " +
            "excepción del primer caracter")
        assert.equal(emailValidationRegister("antonio@gma.com", users), "El dominio del email ha de tener" +
            " una @ y entre 5 y 10 caracteres")
        assert.equal(emailValidationRegister("antonio@gmail.eu", users), "Las extensiones del dominio válidas " +
            "son .com, .net o .gov")
        assert.equal(emailValidationRegister("antonio.com", users), "Introduce un email válido")
        assert.equal(emailValidationRegister("antonio.gomez@gmail.com", users), "El mail contiene puntos antes " +
            "del arroba y no se admiten")
        assert.equal(emailValidationRegister("tonigarcia@gmail.com", users), "Mail registrado previamente, " +
            "pruebe con uno nuevo")
        assert.equal(emailValidationRegister("antonioperez@gmail.com", users), "E-mail valido")
    })

    it("Password validation", () => {
        assert.equal(passwordValidationRegister("Mocha0"), "La contraseña debe tener al menos 8 caracteres");
        assert.equal(passwordValidationRegister("TestDeMochaMolon00"), "La contraseña no debe superar los 16 caracteres");
        //Does not pass the validation because it doesn't have any mayus character
        assert.equal(passwordValidationRegister("mochatest00"), "La contraseña debe tener al entre 8 y 16 " +
            "caracteres, al menos un dígito, una minúscula y una mayúscula.");
        //Does not pass the validation because it doesn't have any digit
        assert.equal(passwordValidationRegister("MochaTest"), "La contraseña debe tener al entre 8 y 16 " +
            "caracteres, al menos un dígito, una minúscula y una mayúscula.");
        assert.equal(passwordValidationRegister("MochaTest0", "MochaTest0"), "Contraseña válida");
    })

    it("Name validation", () => {
        assert.equal(nameValidationRegister(""), "Introduce un nombre entre 2 y 20 caracteres");
        assert.equal(nameValidationRegister("a"), "Introduce un nombre entre 2 y 20 caracteres");
        assert.equal(nameValidationRegister("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), "Introduce un nombre entre 2 y 20 caracteres");
        assert.equal(nameValidationRegister("Antonio", ""), "Introduce un apellido entre 2 y 20 caracteres");
        assert.equal(nameValidationRegister("Antonio", "a"), "Introduce un apellido entre 2 y 20 caracteres");
        assert.equal(nameValidationRegister("Antonio", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), "Introduce un apellido " +
            "entre 2 y 20 caracteres");
        assert.equal(nameValidationRegister("Antonio", "Gómez"), "Nombre válido");
    })
});
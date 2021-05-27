// Punto 1

/* const fraseSnakeCase = "a_mario_le_gustan_los_gatos";

const palabrasSeparadas = fraseSnakeCase.split("_");

let palabrasModificadas = palabrasSeparadas[0];

for (const palabra of palabrasSeparadas.slice(1)) {
    const inicialMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    palabrasModificadas += inicialMayuscula;
}

console.log(palabrasModificadas); */

// Punto 2

const fraseCamelCase = "aMarioNoLeGustanLosFloats";
let fraseSnakeCase = "";

for (const caracter of fraseCamelCase) {
    if (caracter.toUpperCase() === caracter) {
        fraseSnakeCase += `_${  caracter.toLowerCase()}`
    } else {
        fraseSnakeCase += caracter;
    }
}

console.log(fraseSnakeCase);

// Declarar la palabra secreta
const palabraSecreta = "javascript";

// Función que verifica si la palabra ingresada por el usuario es correcta
function verificarPalabra(palabra) {
    if (palabra.toLowerCase() === palabraSecreta) {
        return true;
    } else {
        return false;
    }
}

// Función que proporciona una pista basada en el intento del usuario
function darPista(palabra) {
    if (palabra.length < palabraSecreta.length) {
        return "La palabra secreta es más larga.";
    } else if (palabra.length > palabraSecreta.length) {
        return "La palabra secreta es más corta.";
    } else {
        let pista = "";
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === palabraSecreta[i]) {
                pista += palabra[i];
            } else {
                pista += "_";
            }
        }
        return "Pista: " + pista;
    }
}

// Función principal del juego
function juegoAdivinanza() {
    let intentos = 5;
    let adivinado = false;

    while (intentos > 0 && !adivinado) {
        let palabraUsuario = prompt("Adivina la palabra secreta. Tienes " + intentos + " intentos:");
        
        if (verificarPalabra(palabraUsuario)) {
            alert("¡Felicidades! Has adivinado la palabra secreta.");
            adivinado = true;
        } else {
            let pista = darPista(palabraUsuario);
            alert("Palabra incorrecta. " + pista);
            intentos--;
        }
    }

    if (!adivinado) {
        alert("Lo siento, te has quedado sin intentos. La palabra secreta era: " + palabraSecreta);
    }
}

// Iniciar el juego
juegoAdivinanza();

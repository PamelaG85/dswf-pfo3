/*///////////////// EJERCICIO 1 - CALCULAR EL ÁREA DE UN RECTÁNGULO //////////////////*/
// Función
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

// Formulario
document.getElementById("areaForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Para Evitar que se recargue la página

    // Obtener los valores de los inputs
    const longitud = parseFloat(document.getElementById("longitud").value);
    const ancho = parseFloat(document.getElementById("ancho").value);

    // Validar los valores
    if (isNaN(longitud) || isNaN(ancho) || longitud <= 0 || ancho <= 0) {
        document.getElementById("resultadoArea").textContent = "Por favor, ingrese valores válidos y mayores a cero.";
        return;
    }

    // Calcular el área y mostrar el resultado
    const area = calcularAreaRectangulo(longitud, ancho);
    document.getElementById("resultadoArea").textContent = `El área del rectángulo es: ${area}`;
});

/*///////////////// EJERCICIO 2 - CONTAR PALABRAS EN UNA CADENA //////////////////*/
//Función
function contarPalabras(cadena) {
        return cadena.split(" ").length;
    }

//Formulario
document.getElementById("cadenaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar recarga de la página

    //Obtener la cadena del input
    const cadena = document.getElementById("cadena").value;

    //Validar el input
    if (!cadena.trim()) {
        document.getElementById("resultadoPalabras").textContent = "Por favor, ingrese una cadena válida.";
        return;
    }

    // Calcular la cantidad de palabras y mostrar el resultado
    const cantidadPalabras = contarPalabras(cadena);
    document.getElementById("resultadoPalabras").textContent = `La cadena contiene ${cantidadPalabras} palabra(s).`;
});

/*///////////////// EJERCICIO 3 - INVERTIR UNA CADENA //////////////////*/
//Función
function invertirCadena(cadenaInvertida) {
    return cadenaInvertida.split("").reverse().join("");
}

//Formulario
document.getElementById("cadenaInvertidaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //Obtener la cadena del input
    const cadena = document.getElementById("cadenaInvertida").value;

    //Validar el input
    if (!cadena.trim()) {
        document.getElementById("resultadoPalabrasInvertidas").textContent = "Por favor, ingrese una cadena válida.";
        return;
    }

    //Inventir la cadena y mostrar el resultado
    const cadenaInvertida = invertirCadena(cadena);
    document.getElementById("resultadoPalabrasInvertidas").textContent = `La cadena invertida es: ${cadenaInvertida}`;
});

/*///////////////// EJERCICIO 4 - ENCONTRAR EL PALÍNDROMO //////////////////*/
//Función
function esPalindromo(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/[\W_]/g, ""); // Eliminar espacios, signos y mayúsculas
    const cadenaInvertida = cadenaLimpia.split("").reverse().join("");
    return cadenaLimpia === cadenaInvertida;
}

//Formulario
document.getElementById("palindromoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //Obtener la cadena del input
    const cadena = document.getElementById("cadenaPalindromo").value;

    //Validar el input
    if (!cadena.trim()) {
        document.getElementById("resultadoPalindromo").textContent = "Por favor, ingrese una cadena válida.";
        return;
    }

    //Verificar si es un palíndromo y mostrar el resultado
    const resultado = esPalindromo(cadena);
    if (resultado) {
        document.getElementById("resultadoPalindromo").textContent = `La cadena "${cadena}" es un palíndromo.`;
    } else {
        document.getElementById("resultadoPalindromo").textContent = `La cadena "${cadena}" no es un palíndromo.`;
    }
});

/*///////////////// EJERCICIO 5 - CONVERTIR LA EDAD DE UN PERRO A AÑOS HUMANOS //////////////////*/
//Función
function edadCanina() {
    const edadCanina = prompt("Ingrese la edad del perro:");

    //Validar el input
    if (isNaN(edadCanina) || edadCanina <= 0) {
        alert("Por favor, ingrese valores válidos y mayores a cero.");
        return;
    }

    //Calcular la edad humana
    const edadHumana = edadCanina * 7;

    //Mostrar el resultado
    alert(`Tu perro tiene ${edadHumana} años humanos 🐕🧡`);
}

//Llamamos a la función dando clic al botón
document.getElementById("calcularEdadBtn").addEventListener("click", edadCanina);
/*///////////////// EJERCICIO 1 - CALCULAR EL ÁREA DE UN RECTÁNGULO //////////////////*/
// Función
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

// Formulario
document.getElementById("areaForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Para evitar que se recargue la página

    // Obtener los valores de los inputs
    const longitud = parseFloat(document.getElementById("longitud").value);
    const ancho = parseFloat(document.getElementById("ancho").value);

    // Validar los valores
    if (isNaN(longitud) || isNaN(ancho) || longitud <= 0 || ancho <= 0) {
        document.getElementById("resultadoArea").textContent = "Por favor, ingrese valores numéricos válidos y mayores a cero.";
        return;
    }

    // Calcular el área y mostrar el resultado
    const area = calcularAreaRectangulo(longitud, ancho);
    document.getElementById("resultadoArea").textContent = `El área del rectángulo es: ${area}`;
});

// Mostrar resultados por consola
console.log("EJERCICIO 1: CALCULAR EL ÁREA DE UN RECTÁNGULO");
console.log("=========================================================");
console.log("Solución 1: " + calcularAreaRectangulo(5, 3)); //Resultado: 15
console.log("Solución 2: " + calcularAreaRectangulo(8, 4)); //Resuldato: 32
console.log("Solución 3: " + calcularAreaRectangulo(2, 7)); //Resuldato: 14
console.log("/////////////////////////////////////////////////////////");
console.log("");

/*
COMENTARIOS: Para este ejercicio lo primero que pensé fue la fórmula del área de un rectángulo,
luego pensé en la fórmula para calcular el área de un rectángulo (longitud * área) y así armé una función
que recibe esos 2 parámetros, los multiplica y devuelve el resultado, que es el área del rectángulo.

Después me pareció interesante hacerlo más interactivo, que no solo fueran las 3 soluciones pedidas,
sino que se puedieran ingresar distintos valores en los inputs y que tomando esos valores la función
calculara el área de cualquier rectángulo pedido por el usuario. Para esto, hice un formulario con los
inputs y el botón "Calcular Área".

También puse una validación para que, valga la redundancia, se valide que los valores ingresados sean
numéricos y positivos. Finalmente, el resultado se muestra en la página con un mensaje.
*/

/*///////////////// EJERCICIO 2 - CONTAR PALABRAS EN UNA CADENA //////////////////*/
//Función
function contarPalabras(cadena) {
        return cadena.split(" ").length;
    }

//Formulario
document.getElementById("cadenaForm").addEventListener("submit", function(event) {
    event.preventDefault();

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

// Mostrar resultados por consola
console.log("EJERCICIO 2: CONTAR PALABRAS EN UNA CADENA");
console.log("=========================================================");
console.log("Solución 1: " + contarPalabras("Probando si funciona")); //Resultado: 3
console.log("Solución 2: " + contarPalabras("Mi gato color naranja se llama Naranjo")); //Resultado: 7
console.log("Solución 3: " + contarPalabras("Felíz primavera")); //Resultado: 2
console.log("////////////////////////////////////////////////////////");
console.log("");

/*
COMENTARIOS: Para este ejercicio pensé en una función que reciba como parámetro una cadena de texto y
con la función "split" usando el espacio como separador la convierta en un array de subcadenas, es
decir de las palabras separadas, y luego con "length" contar al número de elementos del array.

Al igual que con el anterior, me gustó más la idea de que sea un array ingresado por el usuario, por lo
que también implementé un formulario con un input y un botón.  También le puse una validación para que
valide que la cadena no esté vacía o no tenga solo espacios.
*/

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

// Mostrar resultados por consola
console.log("EJERCICIO 3: INVERTIR UNA CADENA");
console.log("=========================================================");
console.log("Solución 1: " + invertirCadena("Probando si funciona")); //Resultado: anoicnuf is odnaborP
console.log("Solución 2: " + invertirCadena("Noviembre")); //Resultado: erbmeivoN
console.log("Solución 3: " + invertirCadena("Hola")); //Resultado: aloH
console.log("/////////////////////////////////////////////////////////");
console.log("");

/*
COMENTARIOS: Para este ejercicio pensé que también sería de utilidad el método "split" que usé en el ejercicio
anterior para armar un array con las subcadenas, luego invertirlos con "reverse" y finalmente unirlos nuevamente
con "join" que convierte el array en una cadena.

Y como en los anteriores implementé un formulario para que la función tome la cadena la cadena del input del usuario,
la separe, la invierta y la vuelva a juntar y, finalmene, se muestre el resultado de la cadena invertida. 

También una validación para asegurarme de que el input no estuviera vacío.
*/
 
/*///////////////// EJERCICIO 4 - ENCONTRAR EL PALÍNDROMO //////////////////*/
//Función
function esPalindromo(cadena) {
    const cadenaOriginalLimpia = cadena.toLowerCase().normalize("NFD").replace(/[\W_]/g, "");
    const cadenaInvertida = invertirCadena(cadenaOriginalLimpia);
    return cadenaOriginalLimpia === cadenaInvertida;
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

// Mostrar resultados por consola
console.log("EJERCICIO 4: ENCONTRAR EL PALÍNDROMO");
console.log("=========================================================");
console.log("Solución 1: " + esPalindromo("Neuquen")); //Resultado: true
console.log("Solución 2: " + esPalindromo("Somos o no somos")); //Resultado: true
console.log("Solución 3: " + esPalindromo("Hola")); //Resultado: false
console.log("/////////////////////////////////////////////////////////");
console.log("");

/*
COMENTARIOS: Este fue el ejercicio que me a primera vista me resultó más complejo, luego recordé que habíamos
hecho en primer año un ejercicio similar para técnicas de programación utilizando pseudocódigo. En ese ejercicio
se tomaba la cadena original, se la invertía y se comparaban ambas.

Con eso identificado, me di cuenta de que con la función del ejercicio anterior que usa los métodos de JS "split",
"reverse" y "join" tenía la parte de invertir la cadena y solo faltaba agregar la comparación entre ambas cadenas.

Para resolver todo, la función esPalindromo que como argumento toma la cadena orginial del input y la "limpia"
quitando acentos, espacios, signos y mayúsculas, luego la invierte llamando a la función invertirCadena del 
ejercicio 3, y por último compara la cadena original limpia con la invertida.

Como en las anteriores, usé un formulario y agregué una validación para asegurar que el input no estuviera vacío,
manejar los espacios y los caracteres no admitidos.

Por último con un condicional se muestra el mensaje "La cadena <> es un palíndromo" si la variable "resultado" es true
y "La cadena <> no es un palíndromo" si el false.
*/

/*///////////////// EJERCICIO 5 - CONVERTIR LA EDAD DE UN PERRO A AÑOS HUMANOS //////////////////*/
//Función para mostrar por consola
function edadCaninaConsola() {
    let edadCanina
    
    while (true) {
        edadCanina = prompt("Ingrese la edad del perro:");

        //Validar el input
        if (isNaN(edadCanina) || edadCanina <= 0) {
            alert("Por favor, ingrese valores numéricos válidos y mayores a cero.");
        } else {
            break;
        }
    }

    //Calcular la edad humana
    let edadHumana = edadCanina * 7;

    // Mostrar resultados por consola
    console.log("EJERCICIO 5: CONVERTIR LA EDAD DE UN PERRO A AÑOS HUMANOS");
    console.log("=========================================================");
    console.log(`Tu perro tiene ${edadHumana} años humanos 🐕🧡`);
    console.log("////////////////////////////////////////////////////////");

}

//Llamo a la función para ejecutar y mostrar el resultado por consola
edadCaninaConsola();

//Función para mostrar por pantalla
function edadCaninaPantalla() {
    let edadCanina
    
    while (true) {
        edadCanina = prompt("Ingrese la edad del perro:");

        //Validar el input
        if (isNaN(edadCanina) || edadCanina <= 0) {
            alert("Por favor, ingrese valores numéricos válidos y mayores a cero.");
        } else {
            break;
        }
    }

    //Calcular la edad humana
    let edadHumana = edadCanina * 7;

    // Mostrar el resultado
    alert(`Tu perro tiene ${edadHumana} años humanos 🐕🧡`);

}

//Llamamos a la función dando clic al botón para mostrar por pantalla
document.getElementById("calcularEdadBtn").addEventListener("click", edadCaninaPantalla);

/*
COMENTARIOS: Este ejercicio al principio lo había hecho como los demás con un formulario y
un input, luego releí la consigna y ví que decía que era con un prompt, así que lo rehíce.

Pensé una función similar a la del área del rectángulo, con una multiplicación simple.  El input
del prompt multiplicado por 7 y mostrar el resultado.

Ahora, para implementar esto la función solicita que se ingrese la edad del perro y almacena este
valor en la variable "edadCanina", luego pasa por la validación donde se comprueba que sea un
número y que sea positivo.  Esto se repite con un bucle "while" hasta que se ingresen valores
correctos, lo hice así porque al principio no tenía el bucle pero al implementar que se muestren
los resultados por consola si no tenía esto había que recargar la página para volver a probar
entonces me pareció mejor hacerlo con un bucle.

Me encontré con este problema porque primero había hecho todas las funciones para que se manejaran
con los inputs, pero para cumplir la consigna y mostrar por consola, se me complicaba porque me
lo mostraba por consola y por la pantalla o saltaba el alert y era un desastre!!!

Así que decidí hacer 2 funciones con la misma lógica, solo que una muestra los resultados por
consola y se ejecuta automáticamente al cargar la página y la otra muestra el resultado con un 
`alert` y se ejecuta al hacer click en el botón "Calcular Edad Humana", elegí hacerlo así para cambiar
un poco y además le agregué un emoji de perrito y un corazón porque me pareció divertido y bonito :)
*/
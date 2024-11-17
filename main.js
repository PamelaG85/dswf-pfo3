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
    const cadenaInvertida = cadenaOriginalLimpia.split("").reverse().join("");
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


/*
COMENTARIOS: Este fue el ejercicio que me a primera vista me resultó más complejo, luego recordé que habíamos
hecho en primer año un ejercicio similar para técnicas de programación utilizando pseudocódigo. En ese ejercicio
se tomaba la cadena original, se la invertía y se comparaban ambas.

Con eso identificado, me di cuenta de que con la función del ejercicio anterior que usa los métodos de JS "split",
"reverse" y "join" tenía la parte de invertir la cadena y solo faltaba agregar la comparación entre ambas cadenas.

Para resolver todo, la función esPalindromo que como argumento toma la cadena orginial del input y la "limpia"
quitando acentos, espacios, signos y mayúsculas, luego la invierte con los métodos mencionados arriba, y luego 
compara la cadena original limpia con la invertida.

Como en las anteriores, usé un formulario y agregué una validación para asegurar que el input no estuviera vacío,
manejar los espacios y los caracteres no admitidos.

Por último con un condicional se muestra el mensaje "La cadena <> es un palíndromo" si el la variable "resultado" es true
y "La cadena <> no es un palíndromo" si el false.
*/

/*///////////////// EJERCICIO 5 - CONVERTIR LA EDAD DE UN PERRO A AÑOS HUMANOS //////////////////*/
//Función
function edadCanina() {
    const edadCanina = prompt("Ingrese la edad del perro:");

    //Validar el input
    if (isNaN(edadCanina) || edadCanina <= 0) {
        alert("Por favor, ingrese valores numéricos válidos y mayores a cero.");
        return;
    }

    //Calcular la edad humana
    const edadHumana = edadCanina * 7;

    //Mostrar el resultado
    alert(`Tu perro tiene ${edadHumana} años humanos 🐕🧡`);
}

//Llamamos a la función dando clic al botón
document.getElementById("calcularEdadBtn").addEventListener("click", edadCanina);

/*
COMENTARIOS: Este ejercicio al principio lo había hecho como los demás con un formulario y
un input, luego releí la consigna y ví que decía que era con un prompt, así que lo rehíce.

Pensé una función similar a la del área del rectángulo, con una multiplicación simple.  El input
del prompt multiplicado por 7 y mostrar el resultado.

Ahora, para implementar esto la función solicita que se ingrese la edad del perro y almacena este
valor en la variable "edadCanina", luego pasa por la validación donde se comprueba que sea un
número y que sea positivo.

Por último muestra el resultado con un `alert` y le agregué un emoji de perrito y un corazón porque
todos amamos a los perritos y quedaron bonitos :)
*/
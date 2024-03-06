const hamburguesas = [
    {id: 1, nombre: "italiana",precio: 5000 },
    {id: 2, nombre: "completa", precio: 6000 },
    {id: 3, nombre: "vegana", precio: 5500 },
    {id: 4, nombre: "chacarera",precio: 7000 },
]


function saludar(nombre) {
    console.log("Hola " + nombre);
    return ("Hola "+ nombre);
}
let nombreIngresado
do {
nombreIngresado = prompt("¡Hola! Bienvenido a McJavaS. Por favor ingresa tu nombre para ser atendido")
saludar(nombreIngresado)
if (nombreIngresado == "") {
    alert("Campo vacio");
}
} while (nombreIngresado == "");

    HamburguesaElegida = prompt("Bienvenido " + nombreIngresado + " Por favor elige tu hamburguesa para continuar. \n Italiana: $5.000 \n Completa: $6.000 \n Vegana: $5.500 \n Chacarera: $7.000")
    let HamburguesaEncontrada= hamburguesas.find(hamburguesa => hamburguesa.nombre === HamburguesaElegida);
    if (HamburguesaEncontrada) {
    alert("Has elegido " + hamburguesaEncontrada.nombre + ". Precio: $" + hamburguesaEncontrada.precio);
} else {
    alert("Hamburguesa no encontrada");
}

/* let nombreIngresado
let eligeHamburguesa

function saludar(nombre) {
    console.log("Hola " + nombre);
    return ("Hola "+ nombre);
}


do {
nombreIngresado = prompt("¡Hola! Bienvenido a McJavaS. Por favor ingresa tu nombre para ser atendido")
saludar(nombreIngresado)
if (nombreIngresado == "") {
    alert("Campo vacio");
}
} while (nombreIngresado == "") {
}
do {
    eligeHamburguesa = prompt("Bienvenido " + nombreIngresado + " Por favor elige tu hamburguesa para continuar. \n Hamburguesa 1: $2.000 \n Hamburguesa 2: $2.500 \n Hamburguesa 3: $3.000")
    console.log("ELegiste " + eligeHamburguesa);
    if (eligeHamburguesa == "") {
        alert("Campo vacio");
    }}
    while (eligeHamburguesa == " ") {
    
    } { 
            if (eligeHamburguesa == "Hamburguesa 1" || eligeHamburguesa == "Hamburguesa 2" ||eligeHamburguesa == "Hamburguesa 3")
            eligeBebida = prompt("Elegiste " + eligeHamburguesa + " ¿Quieres agregar papas fritas a tu pedido? \n Papas pequeñas: $1.000 \n Papas medianas: $1.500 \n Papas familiares: $2.000")
        console.log("ELegiste " + eligeHamburguesa);
        } */

//Variables
/* let nombre= prompt("Ingrese su nombre");
console.log("Hola " + nombre);

let numeroA = Number(prompt("Ingresa un número"))
let numeroB = Number(prompt("Ingresa otro número"))
let resultado = numeroA + numeroB
if (resultado >20) {
alert ("El número " + resultado + "es menor a 20");  
} else if (resultado >40) {
    alert ("El número " + resultado + "es menor a 40"); {
    }else{
        alert ("El número " + resultado + "es menor a 60"); 
    }
} */

/* let nombre = prompt("Nombre")
while (nombre == " ") {
    alert ("nombre no válido")
    
} */

/* class Producto {
  constructor(nombre, apellido, anio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.anio = anio;
    this.saludar = function () {
      console.log("Hola! Soy " + this.nombre);
    };
  }
}
const producto1 = new Producto("Miguel", "Bozo", 34);
producto1.saludar(); */
/* let nombre = "Canelita"
let apellido = "Bozo"
let edad = 27

console.log(nombre + " " + apellido + " " + edad);

let anioActual = 2024
let anioNacimiento = 1989
console.log(anioActual * anioNacimiento);

let nombreUsuario = prompt("Ingrese su nombre")
console.log(nombreUsuario); */

/* ESTRUCTURA BASICA IF/ELSE
if (condición que se tiene que cumplir) {
    lo que va a pasar cuando la condición se cumpla
} else {
    qué pasa cuando no se cumple la condición
}  */

/* if (nombreUsuario== " ") {
    alert("Campo Vacío")
} else {
alert= ("")
} */

/* Operadores lógicos
== Es igual
=== Es estríctamente igual
!= Es distinto
!== Es estríctamente distinto
< <= > >= menor/mayor/ menos o igual/ mayor o igual */

/* && Operador AND  
let anio = parseInt(prompt("Ingrese edad"));

if (anio < 94) {
    alert("Generación Silenciosa");
}else if (anio >= 56 && anio < 76) {
    alert("Generación Baby Boom");
}else if (anio >= 44 && anio < 56) {
    alert("Generación X");
}else if (anio >= 31 && anio < 43) {
    alert("Generación Y");
}else{
        alert("Generación Z");
    }
*/

/* || Operador Or */
/* let hamburguesa1 = "Hamburguesa Italiana"
let hamburguesa2 = "Hamburguesa Completa"
let hamburguesa3 = "Hamburguesa Palta Mayo"

let eligeHamburguesa = prompt("Escoja una hamburguesa")
if (eligeHamburguesa == hamburguesa1 || eligeHamburguesa == hamburguesa2 || eligeHamburguesa == hamburguesa3){
alert("Has escogido " + " " + eligeHamburguesa); 
} else {
    alert("Por favor escoge una haburguesa")
} */

/* ! Operador Not */

//For
/* for (let x = 0; x <=10; x++){
    console.log("Ciclo número" + x)
} */

//FOR ANIDADO: Al meter otro FOR dentro de un FOR el ciclo se repetirá dentro del primer ciclo.
/* for (let x = 0; x <=10; x++){
    console.log("Ciclo número" + x)

for (let y=0; y <=5; y++){
    console.log("Ciclo secundario" +y);
}
} */

//While
/* let x=0;
while (x <= 10) {
    console.log("Ciclo número" + x);
    x = x + 1;
}  */

//Do While: El código se ejecutará al menos una vez sin importar la condición

//Switch: es una alternativa al IF
/* let adivinaNumero = Number(prompt("Adivina el número"))
switch (adivinaNumero) {
    case 1:
        alert("Adivinaste!")
        break;

    default:
        alert("Intenta nuevamente")
        break;
} */

//FUNCIONES: estructuras que nos permiten ejecutar una o varias sentencias varias veces dentro del código. No se ejecutan hasta que no son llamadas. Admiten parámetros, que son variables dentro de la función, van entre paréntesis y sirven para que al invocar la función, podamos indicarle el valor del parámetro
//Funciones Declaradas
/* function Saludar(nombre) {//Palabra reservada Nombre (Parámetros)
    console.log("Hola " + nombre);
}
Saludar("Miguel") */ //Llamado a la función

//Funciones Anónimas, guardan el valor dentro de una constante.
/* const Saludar = function (params) {
    console.log("Hola Mundo");
}
Saludar();
 */
//Funciones Flecha: no es necesario declarar la función, es remplazado por la flecha (=>). Tienen la particularidad de que se pueden resumir bastante. Si tiene un solo parámetro y una sola sentencia, no necesita paréntesis ni llaves.
/* const Saludar= (nombre) => console.log("Hola Mundo");
Saludar(); */

//Funciones declaradas con retorno: la función nos devuelve un valor.
/* function suma(a, b) {
return a + b
}
console.log(suma(3, 5)); */

/* const zelda = videoJuegos.filter((videojuego) => videojuego === "zelda")
console.log(zelda); */

/* const nombre constante = array.metodo ((nombre elemento) => condición que queremos que se cumpla) */

console.dir(document.head)
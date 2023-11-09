//Recomeendaciones, realmente lo mejor seria que fueras uno por uno tratando de sumar, restar, acceder a metodos de cada variable y ver que pasa,
//el ejercicio es mas para que veas que errores pueden salir por incompatibilidad de los tipos de datos
// Variables iniciales
let cadena = "HOLA";
let numero = 24;
let double = 23.4;
let boolean = false;
let obj = {
    nombre: "Pepe",
    edad: 17,
    vivo: true,
};
let myNull = null;
let myUndefined;
let miBigInt = 1234567890123456789012345678901234567890n;
let miSimbolo = Symbol("descripcion_del_simbolo");
console.log(miSimbolo);//imprime tal cual se declara
//este no es un tipo de dato pero es un valor muy comun que aparece cuando las operaciones deserealizaciones fallan
let NotNumber = NaN;

// Sumar números
let suma = numero + double;
let sumarStringYNumero=cadena +numero;
// let sumarBigIntYUndefind = miBigInt + undefined;//Genera una excepcion pues no puede hacer operaciones de con valores de otro tipo como el undefined
let sumarObjYBoleean = obj + boolean;
console.log(suma); //se suma
console.log(sumarStringYNumero);//se concatena, si es un valor como "3" puede darse el caso que lo sume y devuelva el valor de la suma0
console.log(sumarObjYBoleean);// se concatena el obj con el valor boleando dando por ejemplo: "[object Object]true
// Concatenar cadenas
let nuevaCadena = cadena + " Mundo";// concatena a una candena otro string

// Acceder a las propiedades de un objeto
let nombrePersona = obj.nombre; //da el valor de obj.nombre a la variable en este caso seria Pepe

// Modificar una propiedad de un objeto
obj.edad = 18; //altera el valor de la propiedad edad dentro del objeto dejandolo como 18

// Comprobar si una variable es nula o indefinida
if (myNull === null) {
    console.log("myNull es nulo"); 
}

if (myUndefined === undefined) {
    console.log("myUndefined es indefinido");
}

// Realizar operaciones con NaN
let resultado = NotNumber + 5;

// Realizar operaciones con BigInt
let nuevaBigInt = miBigInt + 1n;

// Acceder a la descripción del símbolo
let descripcionSimbolo = miSimbolo.description;

// 2. Imprimir resultados
console.log("Suma: " + suma);
console.log("Nueva Cadena: " + nuevaCadena);
console.log("Nombre de la persona: " + nombrePersona);
console.log("Edad modificada: " + obj.edad);
console.log("Resultado con NaN: " + resultado);
console.log("Nueva BigInt: " + nuevaBigInt);
console.log("Descripción del símbolo: " + descripcionSimbolo);

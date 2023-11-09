//scope generico o "global"
var a = 1;
let b = 2;
const c = 3;
//scope preciso dentro de la funcion (es como si fuera un universo aparte dentro del universo principañ)
function testScope() {
var a = 4;
let b = 5;
const c = 6;
console.log('Dentro de la función', a, b, c);
}

testScope();
console.log('Fuera de la función', a, b, c);

testScope();
console.log('Fuera de la función', a, b, c);
/*JavaScript tiene algo llamado scope que ayuda a llevar la jerarquia del codigo, cuando declaras
*variables con el mismo nombre pero en distintos niveles jerarquicos no te pondra problema por repetir nombre de variables pero si debes
tener en cuenta que te cambiara los valores por el respectivo valor del scope, en este ejemplo si tu trataras de iniciaizar nuevamene las variables fuera de la funcion te salndria un error porque los nombres ya existem
Tambien puede al tratar de cambiar el valor de una constante dentro de un scope que ya tiene valor tambien tendrias un error, pues las constantes mantienen su valor en el scope y es inmutable
*/
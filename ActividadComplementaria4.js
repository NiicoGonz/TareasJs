function imprimirNumeros() {
  for (let index = 1; index <= 10; index++) {
    console.log(index);
  }
}
function sumarNumeros() {
  let suma = 0;
  for (let index = 1; index <= 100; index++) {
    suma += index;
  }
  return suma;
}

function imprimirTablaMultiplicar() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function bucleWhie() {
  let numero = 100;

  while (numero >= 1) {
    console.log(numero);
    numero = numero / 2;
  }
}

imprimirNumeros();
console.log("/////////////////////////////////");
console.log("La suma de los números del 1 al 100 es:", sumarNumeros());
console.log("/////////////////////////////////");
imprimirTablaMultiplicar();
console.log("/////////////////////////////////");
fizzBuzz();
console.log("/////////////////////////////////");
bucleWhie();

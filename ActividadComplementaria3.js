function calcularMedia(arrayNumeros) {
    let sum = 0;
    for(let i = 0; i < arrayNumeros.length; i++)
    {
    sum += arrayNumeros[i];
    }
    return sum/arrayNumeros.length;
    }
    function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
    }
    function esPalindromo(cadena) {
    let cadenaReversa = invertirCadena(cadena);
    console.log(cadena);//imprime el valor de cadena
    console.log(cadenaReversa);//imprime el valor de la cadena invertida
    console.log(typeof(cadena));//imprime el tipo de dato de cadena
    console.log(typeof(cadenaReversa));//imprime el tipo de dato de cadenaReversa
    //Retorna true porque aqui está retornando una validacion la cual compara si cadena es estrictamente igual a cadena reversa
    //esto quiere decir que mira tanto si el tipo de dato y el valor del dato es correcto
    //tipo de dato de cadena: string valor del dato "radar", tipo de dato de cadenaReversa 
    return cadena === cadenaReversa;
    }
    console.log(calcularMedia([1, 2, 3, 4, 5]));
    console.log(invertirCadena("hola"));
    console.log(esPalindromo("radar"));
'use strict'

//conversor es el nombre de la función. Dentro del paréntesis es lo que quiero recivir
function conversor(value) { 
    //se nombra la variable let para que su alcance sea local. 
    let fahrenheit = value * 9/5 + 32; 
    /*El typeof indica que tipo de variable es farenheit. El operador sin identidad !== devuelve verdadero si los operandos no son iguales y / o no del mismo tipo.
    si farenheit está definido*/
    if (typeof fahrenheit !== "undefined") { 
        // Devuelve la conversión a farenheit
        return fahrenheit; 
    } else {
        // sino devuelve que farenheit no está definido
        return "fahrenheit not defined"; 

    }
}

function obtenerConversor() {
    // Devolver el html
    const input = document.querySelector('#input-value');
    // coger el html del input
    const value = input.value;
    // secreó una variable para llamar la primera función
    const valorConvertido = conversor(value);

    imprimirResultado(valorConvertido);
}

function imprimirResultado(valorConvertido) {
    const inputDos = document.querySelector('#resultado');
    inputDos.innerHTML=valorConvertido; // pegar el texto al html
}
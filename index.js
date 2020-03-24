'use strict'
//no recibe parámetro porque no es necesario, el botón no envía nada
// Es la función que el botón va a llamar
function obtenerConversor() { 
    // Devuelve el html del input
    const input = document.querySelector('#input-value');
    // coge lo que el usuario ingrea en el input
    const value = input.value;
    // se creó una variable para llamar la función conversor (guardar lo que retorne esa función)
    if (value === "") {
        return;
    }
    const valorConvertido = conversor(value);
    // llama a la función y manda la variable a esa función ya que valorConvertido recibe un parámetro
    imprimirResultado(valorConvertido);
}

//conversor es el nombre de la función. Dentro del paréntesis es lo que quiero recibir
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

function imprimirResultado(valorConvertido) {
    const divResultado = document.querySelector('#resultado');
    divResultado.innerHTML=valorConvertido; // pegar el texto al html
}

const boton = document.querySelector('#botonConvertir')
boton.addEventListener('click', obtenerConversor);
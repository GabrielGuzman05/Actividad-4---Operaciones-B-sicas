// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btn = document.getElementById("btn");
/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado")
/* Obtenemos los dos input y los almacenamos en
variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
var select = document.getElementById("operacion");
// Añadimos el evento click a la variable "btn"
btn.addEventListener("click",function(){
/* Obtenemos el valor de cada input accediendo a
su atributo "value" */
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    var opcion = select.value;
    if (!isInt(n1)&&!isInt(n2)){
        alert("Número 1 y 2 no validos");
    }else{
        if (!isInt(n1)){
            alert("Número 1 no valido");
        }
        if (!isInt(n2)){
            alert("Número 2 no valido");
        }
    }
    switch(opcion){
        case "Sumar":
            resultado.innerHTML = suma(n1, n2);
            break;
        
        case "Restar":
            resultado.innerHTML = resta(n1, n2);
            break;
        
        case "Multiplicar":
            resultado.innerHTML = multi(n1, n2);
            break;

        case "Dividir":
            resultado.innerHTML = divi(n1, n2);
            break;
    }
});

function suma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}

function divi(n1, n2) {
    if(n2 == 0){
        alert("No se puede dividr por 0");
        return NaN;
    }
    return parseInt(n1) / parseInt(n2);
}

function multi(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
  }

//Agrega el valor a la pantalla de lo que seleccionemos.
function agregar(valor){
    document.getElementById('pantalla').value += valor

}

//Borrar todo lo que ya este ingresado por pantalla.
function borrar(){
    document.getElementById('pantalla').value = ''

}

//Toma los valores de la pantalla y realiza los calculos.
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado

}
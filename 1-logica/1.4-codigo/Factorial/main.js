var numero
var factorial = 1
var imprimir
numero = prompt("Dame un numero entero y te doy su factorial") 
numero = Math.trunc(numero)
imprimir = numero

for (numero;numero >= 1;numero--){
    factorial = factorial * numero
}
document.write("El factorial de "+imprimir+ " es "+factorial)
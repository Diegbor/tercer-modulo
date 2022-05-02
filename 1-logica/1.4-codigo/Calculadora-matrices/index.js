var matrizA = [
    [2, 0, 1],
    [3, 2, 0],
    [5, 4, 1]
];

var matrizB = [
    [4, 0, 3],
    [1, 2, 7],
    [4, 5, 0]
];

var matrizResultado = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var matrizResultado2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var a=100
var b = 139
var resultado = a +b
console.log(resultado)
console.log('matrizA => ', matrizA);
console.log('matrizB => ', matrizB);
console.log('matrizResultado => ', matrizResultado);
console.log('matrizResultado2 => ', matrizResultado2);

for (var fila=0; fila<matrizResultado.length;fila++){
    for (var columna=0; columna <matrizResultado.length;columna++){
        // debugger
        matrizResultado[fila][columna]=matrizA[fila][columna]+matrizB[fila][columna]
    }
}

for (var fila = 0; fila <= 3; fila++) {
    for (var columna = 0; columna < 3; columna++) {
        matrizResultado2[fila][columna]=matrizA[fila][columna]-matrizB[fila][columna]
    }
}

console.log('matrizResultado (suma) => ', matrizResultado);
console.log('matrizResultado (resta) => ', matrizResultado2);
console.log(matrizA.length)
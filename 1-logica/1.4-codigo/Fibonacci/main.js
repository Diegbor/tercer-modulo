var limite
limite = prompt("Ingresa el numero de elementos al que quieres llegar")
limite = Math.trunc(limite)
var serie = 0

if(limite === 1){
    document.write("0")
}else if(limite === 2){
    document.write("0  1")
}else{
    document.write("0  1  ")
    var a=1
    var b=0
    for(i =0; i<limite-2;i++){
        serie = a+b
        document.write(serie+"  ")
        b=a
        a=serie
    }
}
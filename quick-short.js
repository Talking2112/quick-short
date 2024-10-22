let arr = [17, 14, 23, 2, 4, 9, 15, 1, 0, 3,  5]

function quickshort(array){
    // se array for um numero só, já esta ordenado
    // entao retorne ele 
    if(array.length <= 1){
        return array
    }
    // escolher pivo
    let pivo = array[0]
    // criar duas variaveis, esquerda e direita
    let direita = []
    let esquerda = []

    // percorro o meu array e para cada numero
    // verifico se ele é maior ou menor que o pivo
    // e posiciono ele na array esquerda ou direita
    for(let i=1; i < array.length; i++){
        if(array[i] < pivo){
            esquerda.push(array[i])
        }else{
            direita.push(array[i])
        }
    }
    return quickshort(esquerda).concat(pivo, quickshort(direita))
    // escrever uma recursão para chamar novamente o
    // quickshort, uma x pra esquerda e x uma pra direita
}

quickshort(arr)
console.log(quickshort(arr))
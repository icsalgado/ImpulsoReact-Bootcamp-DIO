/**Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1 */

function trocaNumero(array){
    if (array.length == 0){
        return console.log(-1);
    }else {
        for (let i = 0; i < array.length; i++){
            if(array[i]%2 === 0){
                array[i] = 0;
            }
        }
    }
    return console.log(array);
}

console.log(`
Verifica Numeros pares`);
trocaNumero([1, 2, 2, 5, 4, 4, 7, 8, 8]);
trocaNumero([]);
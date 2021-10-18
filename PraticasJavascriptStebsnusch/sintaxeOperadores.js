/**Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". */

function verificaNumeros (numero1, numero2){
    let saoIguais;
    if(numero1 === numero2){
        saoIguais = `Os numeros ${numero1} e ${numero2} são iguais.`;
    }else {
        saoIguais = `Os numeros ${numero1} e ${numero2} não são iguais.`;
    } //bloco de teste de igualdade

    let soma = numero1+numero2;
    let testa10;
    let testa20;

    if (soma > 10){
        testa10 = "que é maior que 10";
    }else{
        testa10 = "que é menor que 10";
    } //bloco de teste maior que 10

    if (soma > 20){
        testa20 = "e que é maior que 20";
    }else{
        testa20 = "e menor que 20";
    } //bloco de teste maior que 20

    /*os proximos ifs testam caso a soma seja igual a 10 ou igual a 20 */
    if(soma === 20){
        testa20 = testa20.replace('que', 'ou igual a');
    }
    if(soma === 10){
        testa10 = testa10.replace('que 10', 'ou igual a 10');
    }

    return console.log(`${saoIguais} sua soma é ${soma}, ${testa10} ${testa20}`); //retorno da frase completo interpolando as frases criadas

}

console.log("Sintaxe e Operadores");
verificaNumeros(5, 5); //chamada da função com parametros
verificaNumeros(10, 10);
verificaNumeros(5, 10);
verificaNumeros(20, 5);
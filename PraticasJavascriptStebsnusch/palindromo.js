/**Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar) */

function testePalindromo(texto) {
	for (var i = 0; i < texto.length / 2; i++) { //a primeira metade da string
		if (texto[i] !== texto[texto.length - 1 - i]) {//se a letra correspondente ao indice for diferente da letra correspondente no final da string, não é um palindromo. texto.length - 1 é por que o length retorna uma contagem a partir de 1 e o indice a partir de 0 e subtraimos o i para percorrer a string do fim para a metade
			return console.log(`${texto} não é um palindromo`);
		}
	}
	return console.log(`${texto} é um palindromo`); //se o teste dentro do for indicar um palindromo
}

function verificaPalindromo(string) { 
	if (!string) return; //testa se é uma string
	console.log(string === string.split('').reverse().join('')); //split transforma cada letra nesse caso em um elemento de um array. reverse inverte a ordem desse novo array. join transfora o array numa string. depois disso compara todo esse resultado de metodos (que é a string inicial invertida) com a string original. e vai motrar apenas num retorno positivo ou falso
}


console.log("Palindromo solução 1");
testePalindromo('abacaxi');
console.log("Palindromo solução 2");
verificaPalindromo('cat');
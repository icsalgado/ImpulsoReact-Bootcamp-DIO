/*Você recebeu desafio para determinar qual dos produtos é o preferêncial dos clientes de um posto de abastecimento de combustível. Para isso você deve escrever um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4. */

let alcohol = 0;
let gasoline = 0;
let diesel = 0;
var op = parseInt(gets());

while(op > 4 || op < 1){
  op = parseInt(gets());
}
while(op !== 4){
  switch(op){
    case 1:
      alcohol = alcohol + 1;
      break;
    case 2:
      gasoline = gasoline + 1;
      break;
    case 3:
      diesel = diesel + 1;
      break;
  }
  op = parseInt(gets());
  while(op > 4 || op < 1){
    op = parseInt(gets());
  }
}


console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);
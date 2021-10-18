/**Desafio
Há um país denominado Lolipad, todos os habitantes ficam felizes em pagar seus impostos, pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em benefício da população, sem qualquer desvio. A moeda deste país é o Loli, cujo símbolo é o R$.

Você terá o desafio de ler um valor com duas casas decimais, equivalente ao salário de uma pessoa de Loli. Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.

0 a 2k - isento
2000.01 a 3k 8%
3000.01 a 4.5k 18%
> 4.5k 28%

Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais. */
1
var salario = parseFloat(gets());

function calcularImposto(valor) {

  let imposto = 0;
  let montante;
  let salario = valor;

    if (salario > 4500.00) {
      montante = salario - 4500.00;
      imposto = (montante * 0.28) + 350;
    } else if (salario > 3000.00) {
      montante = salario - 3000.00;
      imposto += (montante * 0.18) + 80;
    } else if (salario > 2000.00) {
      montante = salario - 2000.00;
      imposto += (montante * 0.08) + 0  //insira seu código nos espaços em branco
    }
    
    return imposto;

}

let resultado = calcularImposto(salario);

print((resultado === 0)? "Isento" : "R$ "+resultado.toFixed(2));
let lines = gets().split("\n");
let line = lines.shift().split(' ');


let N = parseInt(line[0]);
let L = parseInt(line[1]);


let perimetro = N * L;

print(perimetro);
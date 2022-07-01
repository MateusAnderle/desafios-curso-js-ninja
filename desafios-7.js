//Crie um array com 5 items (tipos variados).
let arrayX = ['Mateus', 27, true, 'Anderle', 42.64];


/*Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.*/
function addItem(itens){

    arrayX[arrayX.length] = itens;

    return arrayX;
}


/*Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.*/
console.log(addItem(['Maria', 45, 'Jorge']));


/*Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."*/
console.log(`O segundo elemento do segundo array é ${arrayX[5][1]}.`);


/*Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."*/
console.log(`O primeiro array tem ${arrayX.length} itens.`)


/*Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."*/
console.log(`O segundo array tem ${arrayX[5].length} itens.`)


/*Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.*/
let numPares = 10;
while (numPares <= 20) {
    console.log(numPares);
    numPares = numPares+2
}


//Na mesma ideia do exercício acima: mostre agora os números ímpares.
let numImpares = 10;
while (numImpares <= 20) {
    console.log(numImpares+1);
    numImpares = numImpares+2
}


/*Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.*/
for(let i = 100; i <= 120; i=i+2){
    console.log(i);
}

for(let j = 100; j < 120; j=j+2){
    console.log(j+1);
}
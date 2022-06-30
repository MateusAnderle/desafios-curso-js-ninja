// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(a, b) {
    return a+b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let somados = (somar(4, 8))+5

// Qual o valor atualizado dessa variável?
console.log(somados); //17

// Declare uma nova variável, sem valor.
let novaVar = 0;

/*Crie uma função que adicione um valor à variável criada acima, e retorne a string:
  O valor da variável agora é VALOR.
  Onde VALOR é o novo valor da variável.*/
function adicionar(){
    return `O valor da variável agora é ${novaVar + 5}`;
}

// Invoque a função criada acima.
console.log(adicionar())

// Qual o retorno da função? (Use comentários de bloco).
    //R: Se eu tivesse somente declarado a varíavel seria NaN, mas declarando com valor zero, ela retorna 5

/*Crie uma função com as seguintes características:
  1. A função deve receber 3 argumentos;
  2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
  3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.*/
function tresArgumentos(a, b, c) {
    if (a == undefined) {
        return "Preencha todos os valores corretamente!"
    }
    if (b == undefined) {
        return "Preencha todos os valores corretamente!"
    }
    if (c == undefined) {
        return "Preencha todos os valores corretamente!"
    }
    return (a * b * c)+2
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log('Função tresArgumentos: ' + tresArgumentos(2, 2))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
    //R: Se passados 2 argumentos, retorna a string pedida no exercício, se passados 3 argumentos, retorna a conta matemática

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log('Função tresArgumentos: ' + tresArgumentos(2, 2, 2))


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
    //R: 10, exatamente o proposto pelo exercício.

/*Crie uma função com as seguintes características:
  OK  1. A função deve receber 3 argumentos.
  OK  2. Se somente um argumento for passado, retorne o valor do argumento.
  OK  3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
  OK  4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
  OK  5. Se nenhum argumento for passado, retorne o valor booleano `false`.*/
function novaTresArgumentos(a, b, c) {
    if (a == undefined) {
        return false;
    }
    if (b == undefined && c == undefined) {
        return a;
    }
    if (c == undefined) {
        return a + b;
    }
    return (a + b)/c
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
    //R: Todos os resultados ficam de acordo com o solicitado no exercício.
    console.log('Nova Tres Argumentos: ' + novaTresArgumentos(10, 10, 4,));
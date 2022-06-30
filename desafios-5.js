/*Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).*/
let novaVar = [5, 64, 22, 15, 35]

/*Crie uma função que receba um array como parâmetro, e retorne esse array.*/
function retornaArray (a) {
    return a;
}


/*Imprima o segundo índice do array retornado pela função criada acima.*/
retornaArray(novaVar[1]);


/*Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. 
- A função deve retornar o valor de um índice do array que foi passado no primeiro parâmetro. 
- O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.*/
function arrayNum (array, num) {
    return array[num];
}

arrayNum(novaVar, 1);


/*Declare uma variável que recebe um array com 5 valores, de tipos diferentes.*/
let arrayMisturado = ['Mateus', 27, true, 84.6, 'Silva'];

/*Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.*/
for(let i = 0; i < arrayMisturado.length; i++){
    arrayNum(arrayMisturado, i);
}


/*Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. 
-Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.*/
function book(bName){ 
    let books = {
        livroA: {
            quantidadePaginas: 100,
            autor: 'Roberto Silva',
            editora: 'Crescer'
        },
        livroB: {
            quantidadePaginas: 250,
            autor: 'João pedro',
            editora: 'Fundamentos'
        },
        livroC: {
            quantidadePaginas: 175,
            autor: 'Caio Rolando',
            editora: 'Base'
        },
    };
    
    if (bName == null) {
        return books;
    } else {
        if(bName == Object.keys(books)[0]){
            return books.livroA
        } else if (bName == Object.keys(books)[1]){
            return books.livroB;
        } else if (bName == Object.keys(books)[2]){
            return books.livroC;
        } 
    }
};

/*Usando a função criada acima, imprima o objeto com todos os livros.*/
book();


/*Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"*/
`O ${Object.keys(book())[0]} tem ${book('livroA').quantidadePaginas} páginas`;


/*Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."*/
`O autor do  ${Object.keys(book())[0]} é ${book('livroA').autor}`;

/*Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."*/
`O ${Object.keys(book())[0]} foi publicado pela editora ${book('livroA').editora}`;

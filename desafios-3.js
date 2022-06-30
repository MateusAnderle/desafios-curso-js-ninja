// Declarar uma variável qualquer, que receba um objeto vazio.
let objetoNovo = {};

/*Declarar uma variável `pessoa`, que receba suas informações pessoais.
  As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão*/
let pessoa = {
    nome: 'Mateus',
    sobrenome: 'Anderle',
    sexo: 'Masculino',
    idade: 27,
    altura: 1.96,
    peso: 90,
    andando: false,
    caminhouQuantosMetros: 0
};

/*Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
  alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
  for chamado.*/
pessoa = {
    nome: 'Mateus',
    sobrenome: 'Anderle',
    sexo: 'Masculino',
    idade: 27,
    altura: 1.96,
    peso: 90,
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversario(){
        pessoa.idade = pessoa.idade+1
    }
};
pessoa.fazerAniversario();
console.log('Obejto pessoa com + 1 ano: ' + pessoa.idade)


/*Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
  características:
  - Esse método deve receber por parâmetro um valor que representará a quantidade
  de metros caminhados;
  - Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
  valor dessa propriedade a quantidade passada por parâmetro;
  - Ele deverá modificar o valor da propriedade `andando` para o valor
  booleano que representa "verdadeiro";*/
pessoa = {
    nome: 'Mateus',
    sobrenome: 'Anderle',
    sexo: 'Masculino',
    idade: 27,
    altura: 1.96,
    peso: 90,
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversario(){
        pessoa.idade = pessoa.idade+1
    },
    andar(metrosCaminhados){
        pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + metrosCaminhados;
        pessoa.andando = true;
    }
};
pessoa.andar(35);
console.log(`Metros caminhados: ${pessoa.caminhouQuantosMetros}, pessoa está andando? ${pessoa.andando}`)

/*Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
  da propriedade `andando` para o valor booleano que representa "falso".*/
pessoa.parar = function parar() {
    pessoa.andando = false;
};
pessoa.parar()

console.log(pessoa);


/*Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"*/
pessoa.nomeCompleto = function nomeCompleto() {
    return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome} `
};
console.log(pessoa.nomeCompleto());


/*Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"*/
pessoa.mostrarIdade = function mostrarIdade() {
    return `Olá, eu tenho ${pessoa.idade} anos!`
};
console.log(pessoa.mostrarIdade());


/*Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."*/
pessoa.mostrarPeso = function mostrarPeso() {
    return `Eu peso ${pessoa.peso} Kgs`
};
console.log(pessoa.mostrarPeso());


/*Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."*/
pessoa.mostrarAltura = function mostrarAltura() {
    return `Minha altura é ${pessoa.altura}m`
};
console.log(pessoa.mostrarAltura());

/*Faça a `pessoa` fazer 3 aniversários.*/
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();


/*Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
  comentários inline ao lado da instrução para mostrar qual foi a resposta
  retornada)*/
console.log(pessoa.mostrarIdade());


/*Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
  com metragens diferentes passadas por parâmetro.*/
  pessoa.andar(35);  
  pessoa.andar(55);
  pessoa.andar(355);
  console.log(`Metros caminhados: ${pessoa.caminhouQuantosMetros}!`);


/*A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)*/
console.log(`A pessoa está andando? ${pessoa.andando}`)


/*Se a pessoa ainda está andando, faça-a parar.*/
pessoa.parar()

/*E agora: a pessoa ainda está andando? (Use uma instrução para responder e
  comentários inline ao lado da instrução para mostrar a resposta retornada)*/
console.log(`A pessoa está andando? ${pessoa.andando}`);


/*Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)*/
console.log(`Total de metros caminhados no dia: ${pessoa.caminhouQuantosMetros}`);


/*Agora vamos deixar a brincadeira um pouco mais divertida! :D
  Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
  retornar a string:
  - "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

  Só que, antes de retornar a string, você vai fazer algumas validações:
  - Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
  apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
  - Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
  palavra "ano" ao invés de "anos", pois é singular;
  - Se a quantidade de metros caminhados for igual a `1`, então a palavra que
  deve conter no retorno da frase acima é "metro" no lugar de "metros".
  - Para cada validação, você irá declarar uma variável localmente (dentro do
  método), que será concatenada com a frase de retorno, mostrando a resposta
  correta, de acordo com os dados inseridos no objeto.*/

pessoa.apresentacao = function apresentacao() {
    sexo = '';
    idade = '';
    distancia = '';

    pessoa.sexo == 'Masculino' ? sexo = 'o' : sexo = 'a';
    pessoa.idade == 1 ? idade = 'ano' : idade = 'anos';
    pessoa.caminhouQuantosMetros == 1 ? distancia = 'metro' : distancia = 'metros';

    console.log(`Olá, eu sou ${sexo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${idade}, ${pessoa.altura}m, meu peso é ${pessoa.peso}Kg e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${distancia}!`);
};

// Agora, apresente-se ;)
console.log(pessoa.apresentacao());
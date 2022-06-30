/*Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
  seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão*/
let carro = {
    marca: 'Mercedes-Benz',
    modelo: 'CLA 45 AMG',
    placa: 'QHU-9986',
    ano: 2022,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,
};


//Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor passado por parâmetro
carro.mudarCor = function mudarCor(cor) {
    carro.cor = cor;
}
carro.mudarCor('Chumbo');


//Crie um método chamado `obterCor`, que retorne a cor do carro.
carro.obterCor = function obterCor (){
    return carro.cor;
}

//Crie um método chamado `obterModelo` que retorne o modelo do carro.
carro.obterModelo = function obterModelo(){
    return carro.modelo;
}


//Crie um método chamado `obterMarca` que retorne a marca do carro.
carro.obterMarca = function obterMarca(){
    return carro.marca;
}


/*Crie um método chamado `obterMarcaModelo`, que retorne:
  "Esse carro é um [MARCA] [MODELO]"
  Para retornar os valores de marca e modelo, utilize os métodos criados.*/
carro.obterMarcaModelo = function obterMarcaModelo(){
    return `Esse carro é um: ${carro.obterMarca()}, modelo ${carro.obterModelo()}.`
}


/*Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".*/
carro.adicionarPassageiros = function adicionarPassageiros(numPessoas){ 
    let plural = '';
    let lugaresLivres = carro.assentos - carro.quantidadePessoas;

    if (carro.quantidadePessoas == carro.assentos){
        return `Carro já está lotado`;
    } else if (numPessoas > lugaresLivres) {
        return `Há mais gente que lugares! Só cabem ${lugaresLivres} pessoas no momento`;
    } else {
        if(carro.quantidadePessoas <= carro.assentos){
            carro.quantidadePessoas = carro.quantidadePessoas + numPessoas;

            if(carro.quantidadePessoas <= 1){
                plural = 'pessoa'
            } else {
                plural = 'pessoas'
            };
        }
       
        return `Já temos ${carro.quantidadePessoas} ${plural} no carro!`
    };
};


/* Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
   utilize sempre o formato de invocação do método (ou chamada da propriedade),
   adicionando comentários _inline_ ao lado com o valor retornado, se o método
   retornar algum valor.*/

//Qual a cor atual do carro?
carro.obterCor(); //Chumbo

// Mude a cor do carro para vermelho.
carro.mudarCor('Cinza-Escuro');

// E agora, qual a cor do carro?
carro.obterCor(); //Cinza-Escuro

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde-Musgo');

// E agora, qual a cor do carro?
carro.obterCor(); //Verde-Musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo();

// Adicione 2 pessoas no carro.
carro.adicionarPassageiros(2);

// Adicione mais 4 pessoas no carro.
carro.adicionarPassageiros(4); //Há mais gente que lugares! Só cabem 3 pessoas no momento

// Faça o carro encher.
carro.adicionarPassageiros(3); //Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
carro.quantidadePessoas = carro.quantidadePessoas - 4;

// Adicione 10 pessoas no carro.
carro.adicionarPassageiros(10); //Há mais gente que lugares! Só cabem 4 pessoas no momento

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); //1 pessoa
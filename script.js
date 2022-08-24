// aqui estudaremos os tipos de função

// existem as funções declarativas
function funcao(){
    console.log('Tudo certo nesta função!');
}

funcao();

// existem as expressoes de função que são variaveis que recebem uma função
// ela pode ser declarada de duas formas, uma é declarando a variavel e nomeando a função
// a outra forma seria apenas declarando a variavel, uma vez que o JS reconhece o nome
// da variavel como o nome da função que será chamada
var funcao2 = function (){
    console.log('eu sou uma expressão de função!')
}
funcao2();

// por fim as Arrow Functions são funções de expressão sintaxe curta.
// as Arrow Functions sempre serão anônimas, e portanto não podem ser nomeadas.
// deve ser declarada com parênteses "()", seguido de "=>" e depois as "{}"

var funcao3 = () => {
    console.log('eu sou uma Arrow Function!')
}
funcao3();
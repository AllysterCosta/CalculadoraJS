// este é o exercicio de calculadora

function calculadora(){
    const operacao = Number(prompt('escolha uma operação!\n 1 - Soma[+]\n 2 - Subtração[-]\n 3 - Multiplicação[*]\n 4 - Divisão Real[/]\n 5 - Divisão Inteira[%]\n 6 - Potenciação[**]'));
// aqui vamos verificar se os valores da operação são validos
    if (!operacao || operacao >= 7){
        alert('Erro - Opção inválida!');
        calculadora();
    }else{
// aqui são declaradas as variaveis
// usar Number() quer dizer que os dados inseridos serão convertidos de
// string para numeros
        let n1 = Number(prompt('Insira o primeiro valor!'))
        let n2 = Number(prompt('Insira o segundo valor!'))
        let resultado;
// aqui vamos verificar se os numeros digitados são validos
        if(!n1 || !n2){
            alert('Erro - Parâmetros inválidos!');
            calculadora();
        }else{
//aqui será declarada a função
            function soma(){
// aqui é feito o calculo
                resultado = n1 + n2;
 // aqui é gerado a caixa mostrando o resultado
 // usar `` ao inves de usar as "" quer dizer que posso mostrar dados como
// variaveis também não mostrando assim apenas as strigs e textos declarados
                alert(`${n1} + ${n2} = ${resultado}`);
                NovaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                NovaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                NovaOperacao();
            }
            function divReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                NovaOperacao();
            }
            function divInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                NovaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                NovaOperacao();
            }

            function NovaOperacao(){
                let opcao = Number(prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não'))

                if (opcao == 1){
                    calculadora();

                }else if (opcao == 2){
                    alert('Até mais!');
                } else{
                    alert('Digite uma opção válida');
                    NovaOperacao();
                }
            }
        }

// aqui são as condições de validação
        if (operacao == 1){
            soma();
        } else if(operacao == 2){
            subtracao();
        } else if(operacao == 3){
            multiplicacao();
        }else if(operacao == 4){
            divReal();
        } else if(operacao == 5){
            divInteira();
        } else if(operacao == 6){
            potenciacao();
        }
    }
}




calculadora();
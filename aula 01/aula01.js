/*Declaração
1° const - imutavel ou seja não da para mudar o que conter na variavel - escopo local
2° let - mutavel ou seja da pra mudar o que conter na variavel - escopo local
3° var - mutavel - escopo global
*/
const n1 = 20;
const n2 = 20;
//let = resultado;

/*
    Tipo de funções:
        1)
        function nomeDaFunção ( parametros ){
            códigos;
        }

        2)
        const nomeDaFunção = function ( parametros ){
            códigos;
        }

        3)const nomeDaFunção = ( parametros ) {
            códigos;
        }
*/

/*const soma = ( num1, num2 ) => num1 + num2;

const resultado = soma (n1,n2);

alert ("O resultado é: " + resultado);*/

const $num1 = document.getElementById("numero1");
const $num2 = document.getElementById("numero2");
const $somar = document.getElementById("somar");
const $resultado = document.getElementById("resultado");

const soma = () => {
    $resultado.value = parseInt($num1.value) + parseInt($num2.value);
}

$somar.addEventListener("click",soma);
$resultado.style = "background:#000000;color:red;"


//FORMAS
/*  ESTRUTURA DE DECISÃO
if ( n1 > 5 ){
    resultado = n1 + n2;
}else{
    resultado = "o numero 1 é menor que 5";
}*/

/*function soma ( num1, num2 ) {
    return num1 + num2;
}*/

/*
const soma2 = function () {
    return "teste";
}
*/
const number = [8,9,15,2,200,1003,999];

/*
    filter: Cria um novo vetor com os elementos que entejam dentro de uma condição
    Parametros:
        1° Elemento do vetor
        2° Índice do vetor
        3°Vetor
*/
const ePar = ( num ) => num % 2 === 0;
const numerosPares = number.filter ( ePar );

/*
    MAP: Percorre todo o vetor e retorna um vetor novo do mesmo tamanho
    Parametros:
        1° Elemento do vetor
        2° Índice do vetor
        3°Vetor  
*/

const adicionar10 = ( num ) => num + 10;
const numeros10 = number.map ( adicionar10 );

/*
    REDUCE:Retorna um unico valor
    Parametros:
    1°Valor acumulado
    2°Elemento
    3°Índice
    4°Vetor
*/

const somar = ( soma, num ) => soma + num;
const total = number.reduce ( somar );

//const numerosPares = number.filter ( (num) => num % 2 == 0 )

// const numerosPares = [];
// for (let i=0; i<7; i++)
// {
//     resto = number[i] % 2;
//     if ( resto == 0 )
//     {
//         numerosPares.push(number[i]);
//     }
// }

const somarPares = number.filter ( ePar ).reduce (somar)

console.log (number);
console.log (numerosPares);
console.log (numeros10);
console.log (total);
console.log(somarPares);

//função que remove um item, ou todos a partir do parametro
//number.splice(1,2);
//É possivel tambem trocar um numero por outro a partir do splice
///Primeiro parametro = indice pelo qual sera trocado ou removido
//Segundo parametro = indica quantos serao removidos depois do primeiro
//Terceiro parametro = indica qual numero entrara no lugar do antigo
//number.splice(0,1,58);

//Remove o ultimo elemento do array
//number.pop();

//Remove o primeiro elemento do array
//number.shift();

//Adiciona um elemento no inicio do array
//number.unshift();

//Adiciona um numero no fim do array
//number.push();

// for (let i = 0; i < sizeArray; i++){
//     console.log (numeros[i]);
// }
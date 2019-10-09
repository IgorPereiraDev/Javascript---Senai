/********************* LÓGICA DO PROFESSOR *********************************/

$conteiner = document.getElementById("conteiner")

const numeroAleatorio = (min, max ) => {
    return Math.floor(Math.random() * (max + 1 - min) ) + min;
}

const gerarNumeros = () => {
    let numeros = [];
    for (i = 0; i < 30; i++)
    {
        numeros.push( numeroAleatorio(1,20) );
    }
    return numeros;
}

const gerarCards = ( arr, header, title="" ) => {
    html = `
    <div class='card'>
        <div class='card-header'> Exer 01 </div>
        <div class='card-body'>
            <h5 class='card-title'> ${title} </h5>
            <p class='card-text'>${arr.join(" ")}</p>
        </div>  
    </div>`

    return html;
}

const numeros = gerarNumeros();
// const nomes = ["ana","josé","pedro"];
// const estados = ["sp","rj","mg","es"];

const epar = ( num ) => num % 2 == 0;

const filtrarPar = ( arr ) => {
    return arr.filter ( epar );
}

const quadrado = ( num ) => num * num;
const ArrayQuadrado = ( arr ) => arr.map(quadrado);

const numerosPares = filtrarPar(numeros);
const numerosQuadrado = ArrayQuadrado(numeros);

const eUnico = ( el, i, arr ) => {
    // let qtd = arr.filter ( num => num == el ).length;
    // return qtd == 1;
    var cont = 0;
    for (i = 0; i < arr.length; i++){
        if ( el == arr[i] ) {
            cont++;
        }
    }
    return cont == 1;
}

const arrayUnicos = ( arr ) => arr.filter (eUnico);
const numerosUnicos = arrayUnicos (numeros);

$conteiner.innerHTML = gerarCards(numeros,"Exer 01", "Números aleatorios");
$conteiner.innerHTML += gerarCards(numerosPares,"Exer 02", "Números Pares");
$conteiner.innerHTML += gerarCards(numerosQuadrado,"Exer 03", "Números ao quadrado");
$conteiner.innerHTML += gerarCards(numerosUnicos,"Exer 04", "Números Unicos");
// $conteiner.innerHTML += gerarCards(nomes);
// $conteiner.innerHTML += gerarCards(estados);










/********************* MINHA LÓGICA *********************************/

// const ArrayRandom = [];
// const ArrayPar = [];
// const ArrayQuadrado = [];
// const ArrayUnico = [];
//
// /* Parte 1 - FEITO*/
// for(let i = 1; i <= 30; i++)
// {
//     let aleatorio = Math.floor(Math.random() * 21);
//     ArrayRandom.push(aleatorio);
// }
// console.log(ArrayRandom);
// console.log(ArrayRandom);
//
// /*Parte 2 - FEITO*/
// for (let a = 0; a <= 30; a++)
// {
//     if(ArrayRandom[a] % 2 == 0)
//     {
//         ArrayPar.push(ArrayRandom[a]);
//     }
// }
//
// console.log(ArrayPar);
//
// /*Parte 3 - FEITO*/
// for (let b = 0; b <= 29; b++)
// {
//     var quadrado = Math.pow(ArrayRandom[b], 2);
//     ArrayQuadrado.push(quadrado);
// }
// console.log(ArrayQuadrado);
//
//
///*Parte 4 - FEITO*/
//ArrayTeste1 = ArrayRandom;
//ArrayTeste2 = ArrayRandom;
//var cont = 0;
//
// for(let c = 0; c <= 29; c++)
// {
//     for (let d = 0; d <= 29; d++)
//     {
//         if ( ArrayTeste1[c] == ArrayTeste2[d] )
//         {
//             cont ++;
//         }         
//     }
//     if ( cont <= 1)
//     {
//         cont = 0;
//         ArrayUnico.push(ArrayTeste1[c])
//     }
//     else
//     {
//         cont = 0;
//     }
// }
//console.log(ArrayUnico + "Unicos");
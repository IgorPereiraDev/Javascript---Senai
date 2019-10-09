const $minimo = document.getElementById("minimo");
const $maximo = document.getElementById("maximo");
const $pares = document.getElementById("pares");
const $fatorial = document.getElementById("fatorial");
const $fibo = document.getElementById("fibonacci");
const $resultado = document.getElementById("resultado");

const ePar = ( num ) =>num %2 ===0;

const exibirResultado = ( arr ) => {
    $resultado.value = arr.join("\n");
}

const listarPares = () => {
    let cont = 0;
    let num = 1;
    let pares = [];
    while ( cont < $maximo.value )
    {
        if ( ePar(num) )
        {
            cont++
            if ( cont >= $minimo.value )
            {
                pares.push (cont + " - " +num)
            }
        }
        num++;
    }

    exibirResultado (pares);
}

const fatorial = ( num ) =>
{
    let fat = 1;
    while ( num >= 1 )
    {
        fat = fat * num;
        num--;
    }
    return fat;
}

const listarFatorial = () =>
{

    let num = $minimo.value;
    arrFatorial = [];
    while ( num <= $maximo.value )
    {
        arrFatorial.push ( fatorial( num ) );
        num++;
    }
    exibirResultado (arrFatorial, $resultado);
}


const fibo = ( num ) =>
{
    num = parseInt ( num );
    let cont = 0;
    let ant = 0;
    let atual = 1;
    while ( cont < num )
    {
        prox = ant + atual;
        ant = atual;
        atual = prox;
        cont++;
    }
    return ant;
}

const listarFibo = () => 
{
    let num = $minimo.value;
    arrFibo = [];
    while ( num <= $maximo.value )
    {
        num = parseInt(num);
        arrFibo.push ( fibo ( num ) );
        num++;
    }
    exibirResultado ( arrFibo, $resultado )
}

// LÓGICA DO CARLOS
// const arrFibonacci = [0,1];

// const soma2 = ( n1, n2 ) => {
//     n1 + n2;
// }

// const arrAux = arrFibonacci.push (arrFibonacci.reduce(soma2));
// console.log(arrFibonacci);


$fibo.addEventListener("click", listarFibo);
$fatorial.addEventListener("click", listarFatorial);
$pares.addEventListener("click", listarPares);
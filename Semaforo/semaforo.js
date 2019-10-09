const $img = document.getElementById("img");
const $amarelo = document.getElementById("amarelo");
const $verde = document.getElementById("verde");
const $vermelho = document.getElementById("vermelho");
const $automatico = document.getElementById("automatico");

const ligar = ( cor ) => {
    clearInterval (intervalo);
    $img.src = "./img/" + cor + ".png";
    // $img.src = `./img/${cor}.png`;
}
let i = 0;
const auto = (  ) => {
    if ( i == 0 ) {
        $img.src = "./img/vermelho.png";
        i = 1;
    }else if ( i == 1 ) {
        $img.src = "./img/amarelo.png";
        i = 2;
    } else {
        $img.src = "./img/verde.png";
        i = 0;
    }
}

let intervalo = 0;
const funcao_intervalo = () => {
    clearInterval (intervalo);
    intervalo = setInterval (auto, 2000);
}

$amarelo.addEventListener ("click", () => ligar("amarelo"));
$verde.addEventListener ("click", () => ligar("verde"));
$vermelho.addEventListener("click", () => ligar("vermelho"));
$automatico.addEventListener("click", () => funcao_intervalo());
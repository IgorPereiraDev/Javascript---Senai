const url = `https://api.hgbrasil.com/finance?key=development`;
const proxi = `https://cors-anywhere.herokuapp.com/`;

const $destino = document.getElementById('slcdestino');
const $botao = document.getElementById('btncalcular');

let fetchOpcoes = fetch(proxi + url);

fetchOpcoes.then(url => url.json()).then(url => mostra(url));

mostra = (url) => {
    console.log(url.results.currencies);
}

pegaSelect = (  ) => {
    console.log($destino.value)
}

$botao.addEventListener("click",() => pegaSelect());
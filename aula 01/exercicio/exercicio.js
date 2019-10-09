const $nome = document.getElementById("txtnome");
const $media = document.getElementById("txtmedia");
const $situacao = document.getElementById("txtsituacao");
const $calcular = document.getElementById("btncalcular");
const $caixa_principal = document.getElementById("caixa_sobre");
const $btncalcular = document.getElementById("btncalcular");

const soma = () => {
    if( $media.value >= 5 ) {
        $situacao.value = $nome.value + " Aprovado";
        $caixa_principal.style = "background-color:green"
    }else{
        $situacao.value = $nome.value +" Reprovado";
        $caixa_principal.style = "background-color:red";
    }
}

$btncalcular.addEventListener("click", soma);
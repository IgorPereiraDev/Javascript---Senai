const alunos = 
[
    {
        "nome":"fernando", 
        "idade":12, 
        "uf":"SP",
        "salario":600.00
    },
    {
        "nome":"josé", 
        "idade":21, 
        "uf":"RJ",
        "salario":500.00
    },
    {
        "nome":"maria", 
        "idade":28, 
        "uf":"SP",
        "salario":1500.00
    },
    {
        "nome":"hugo", 
        "idade":23, 
        "uf":"RJ",
        "salario":1200.00
    }
];

const $dados = document.getElementById("dados");

const mostrarDados = ( json ) => {
    // const tamanho = json.length;
    // let valores = "";
    // for (let i=0; i<tamanho; i++) {
    //     valores += json[i].nome + " - " + json[i].idade + "<br>";
    //     // valores += `${json[i].nome} -  ${json[i].idade} <br>`;
    // }

    const criarHtml = ( acc, aluno ) => `${acc} ${aluno.nome} - ${aluno.idade} - ${aluno.salario} <br>`;

    return json.reduce ( criarHtml, "" );
}

const alunosSP = ( aluno ) => aluno.uf == "SP";
const somaSalario = ( acc, aluno ) => acc + aluno.salario;
const aumentaSalario = ( aluno ) => ({"nome": aluno.nome, "idade": aluno.salario + 100});


//MINHA LOGICA
// const salariosMenorMil = ( aluno ) => aluno.salario < 1000;

// var todosAlunosSP = alunos.filter(alunosSP);

//alunosSP
$dados.innerHTML = mostrarDados ( alunos );
$dados.innerHTML += "<br> <div> -Alunos de SP- </div>";
$dados.innerHTML += mostrarDados ( alunos.filter ( alunosSP ) );

//somaSalario
$dados.innerHTML += "<br> <div> ---Total--- </div>";
$dados.innerHTML += alunos.reduce ( somaSalario, 0 );

//aumentaSalario
$dados.innerHTML += "<br> <div> ---Novos Salarios--- </div>";
$dados.innerHTML += mostrarDados ( alunos.map ( aumentaSalario ) );


//MINHA LOGICA
// //aumentaSalarioSP
// $dados.innerHTML += "<br> <div> ---Novos Salarios de SP--- </div>";
// $dados.innerHTML += mostrarDados ( todosAlunosSP.map( aumentaSalario ) );

// //salarios menor que mil
// $dados.innerHTML += "<br> <div> ---Salarios menores que mil de sp--- </div>";
// $dados.innerHTML += mostrarDados ( todosAlunosSP.filter( salariosMenorMil ) );


//LOGICA DO PROFESSOR
console.log( alunos.filter( alunosSP ).map( aumentaSalario ) );
const alunosSPMenor1000 = ( aluno ) => 
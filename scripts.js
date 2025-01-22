/*

[x] Variávies

  - Pedaço da memória do pc que podemos guardar informações, mas precisamos nomear
  declarar variáveis = let + nome = variável

[] Funções

  Pedaço de código que só é executado quando eu ordenar

  function + nome da função + () + {}

[] "Tempo"

  setInterval - Ele chama uma função de tempos em tempos
  5 em 5 segundos

[] If e Else
  Se -> Faça isso
  Se não -> Faça isso

  = -> Atribuir ou colocar um valor dentro
  == -> Comparando A com B

*/
/*
let alunosDevClub = "João, Maria..."
let numeros = 1

console.log(alunosDevClub)
function dizerMeuNome() {
  console.log("Shelby")
}

dizerMeuNome() // ordenando para executar

*/
//---------------------------------------------------------------------------

//document = HTML

let imagem = document.querySelector(".troca-imagem")

imagem.style.transition = "opacity 0.8s ease";

function trocaImagem() {

  if (imagem.style.opacity == 0) {
    imagem.style.opacity = 1
  }

  else {
    imagem.style.opacity = 0
  }

}

setInterval(trocaImagem, 3000)

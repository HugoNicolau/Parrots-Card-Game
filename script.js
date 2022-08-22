let qtdcartas = Number(prompt(
  "Com quantas cartas quer jogar?(Apenas números pares de 4 a 14)"
));
while (
  qtdcartas != 4 &&
  qtdcartas != 6 &&
  qtdcartas != 8 &&
  qtdcartas != 10 &&
  qtdcartas != 12 &&
  qtdcartas != 14
) {
  qtdcartas = prompt(
    "Com quantas cartas quer jogar?(Apenas números pares de 4 a 14"
  );
}

let arrayCartas = [
  "./img/1",
  "./img/1",
  "./img/2",
  "./img/2",
  "./img/3",
  "./img/3",
  "./img/4",
  "./img/4",
  "./img/5",
  "./img/5",
  "./img/6",
  "./img/6",
  "./img/7",
  "./img/7",
];


let embaralhar = arrayCartas.slice(0, qtdcartas); // Após esta linha, a minhaArray estará embaralhada
embaralhar.sort(comparador);
// Esta função pode ficar separada do código acima, onde você preferir
function comparador() {
  return Math.random() - 0.5;
}
porCartas();

function porCartas() {
  let card = document.querySelector(".conteudo");
  for (let i = 0; i < qtdcartas; i++) {
    //coloca cartas no jogo
    card.innerHTML += `
      <button class="card">
        <div class="carta" onclick="esconderFrente(this)" >
            <div  class="frente-carta">
            <img src="./img/front.png">
            </div>
            
            <div class="costas-carta">
            <img src="${embaralhar[i]}.gif" >
            </div>
        </div>
           </button> `;
    //colocar todas as cartas diferentes
  }
}
function esconderFrente(element){
    element.classList.add('virada')

}



function virar() {
  let card = document.querySelector(".carta");
  let frontcard = document.querySelector(".carta .frente-carta");
  let backcard = document.querySelector(".carta .costas-carta");
  console.log(card);
  card.classList.toggle(".virar");
  frontcard.classList.toggle(".escondido");
}

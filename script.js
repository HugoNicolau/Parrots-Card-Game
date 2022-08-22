let qtdcartas = 0;
pedirCartas();


function pedirCartas() {
  qtdcartas = prompt(
    "Com quantas cartas quer jogar?(Apenas números pares de 4 a 14"
  );
  if (
    qtdcartas != 4 &&
    qtdcartas != 6 &&
    qtdcartas != 8 &&
    qtdcartas != 10 &&
    qtdcartas != 12 &&
    qtdcartas != 14
  ) {
    pedirCartas();
  } else {
    let card = document.querySelector(".conteudo");
    for (let i = 0; i < qtdcartas; i++) {
        //coloca cartas no jogo
      card.innerHTML += `
      <div class="carta">
      
      </div>`;
      //colocar todas as cartas diferentes
    }
  }
}

function embaralharCartas(){
    //receber quantidade de cartas
    //
}

function virar(){
    let card = document.querySelector('.carta')
    let frontcard = document.querySelector('.carta .frente-carta')
    let backcard = document.querySelector('.carta .costas-carta')
    console.log(card)
    card.classList.toggle('.virar')
    frontcard.classList.toggle('.escondido')
    backcard.classList.toggle('.escondido')


}

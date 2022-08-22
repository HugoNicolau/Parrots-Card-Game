let qtdcartas = Number(
  prompt("Com quantas cartas quer jogar?(Apenas números pares de 4 a 14)")
);
while (
  qtdcartas != 4 &&
  qtdcartas != 6 &&
  qtdcartas != 8 &&
  qtdcartas != 10 &&
  qtdcartas != 12 &&
  qtdcartas != 14
) {
  qtdcartas = prompt(
    "Com quantas cartas quer jogar?(Apenas números pares de 4 a 14)"
  );
}
let contagem = 0;
duracao();
let cartasViradas = 0;
let arrViradas = [];
let jogadas = 0;
let arrAcertos = [];


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
      <button class="card" >
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
function esconderFrente(element) {
  if (cartasViradas < 2) {
    if (element.classList.contains("virada") == false) {
      cartasViradas++;
      jogadas++;
      console.log(cartasViradas);
      arrViradas.push(element);
      element.classList.add("virada");
    }

    //se forem 2 viradas, comparar pra ver se são pares e, se forem, adicionar ao array e não desvirar, se não forem, contar um tempo e desvirar
    if (cartasViradas == 2) {
      let c = arrViradas.length;
      if (
        arrViradas[c - 1].children[1].innerHTML !=
        arrViradas[c - 2].children[1].innerHTML
      ) {
        setTimeout(virarDeVolta, 1000, arrViradas);
        
      } else {
        cartasViradas -= 2;
        arrAcertos.push(arrViradas[c - 1]);
        arrAcertos.push(arrViradas[c - 2]);

        if (arrAcertos.length === qtdcartas) {
          setTimeout(alert, 100, `Parabéns! Você ganhou em ${jogadas} jogadas e ${contagem} segundos!`);

          setTimeout(jogarNovamente, 111);
        }
      }
    }
  } else {
    //não virar nem adicionar ao array de viradas
  }
  //Virar se tiver menos que duas viradas
}

function virarDeVolta(arrayV) {
  let a = arrayV.length;
  arrayV[a - 1].classList.remove("virada");
  arrayV[a - 2].classList.remove("virada");
  cartasViradas -= 2;
}

function jogarNovamente() {
  let b = prompt("Você deseja jogar novamente?(sim ou nao)");
  b = b.toLocaleLowerCase();
  if (b == "nao" || b == "não") {
    alert("Obrigado por jogar!");
  } else if (b == "sim") {
    window.location.reload();
  }
  else{
    while(b != 'sim' && b != 'nao' && b != 'não'){
        b = prompt("Você deseja jogar novamente?(sim ou nao");
    }
  }
}
function duracao(){
    setInterval(soma,1000)
}
function soma(){
    
    let tempo = document.querySelector('.timer')
    contagem++
    

    tempo.innerHTML = contagem
    
}

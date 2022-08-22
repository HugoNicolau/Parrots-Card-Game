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
    "Com quantas cartas quer jogar?(Apenas números pares de 4 a 14"
  );
}

let cartasViradas = 0;
let arrViradas = [];

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
function esconderFrente(element) {
  if (cartasViradas < 2) {
    arrViradas.push(element);
    element.classList.add("virada");
    cartasViradas++;
    //se forem 2 viradas, comparar pra ver se são pares e, se forem, adicionar ao array e não desvirar, se não forem, contar um tempo e desvirar
    if (cartasViradas == 2) {
        console.log(arrViradas[arrViradas.length-1].children[1].innerHTML)
      if (arrViradas[arrViradas.length-1].children[1].innerHTML !=arrViradas[arrViradas.length-2].children[1].innerHTML) {
        console.log(arrViradas[arrViradas.length-1].children[1])
        setTimeout(virarDeVolta, 1000, arrViradas);
        cartasViradas-=2
      }
      else {
        cartasViradas-=2
        
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
  //element.classList.remove('virada')
}

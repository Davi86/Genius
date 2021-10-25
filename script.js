//Declaração de variaveis
let order = [];
let clickedOrder = [];
let score = 0;

//0 = green
//1 = red
//2 = yellow
//3 = blue

//Linkando as classes css
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//Função de aleatorização das cores
let shuffleOrder = () => {
  //Math.floor arredonda o número sorteado e Math.random aleatoriza os números
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    //Number(i) + 1 - ele pega mais um
    lightColor(elementColor, Number(i) + 1);
  }
};

//Função que irá alterar a cores
let lightColor = (element, number) => {
  number = number * 500;
  //Adiciona a classe selecionado
  setTimeout(() => {
    element.classList.add("selecionado");
  }, number - 250);
  //remove a classe selecionado
  setTimeout(() => {
    element.classList.remove("selecionado");
  }, 1000);
};
//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert("Pontuação: " + score + "\nVocê acertou! Iniciando próximo nível");
    nextLevel();
  }
};
//Função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selecionado");
  //remove a classse selecionado
  setTimeout(() => {
    createColorElement(color).classList.remove("selecionado");
    checkOrder();
  }, 250);
};
//Função que retorna a cor
let createColorElement = (color) => {
  //Com Switch
  // switch(color){
  //   case 0: return green;
  //   case 1: return red;
  //   case 2: return yellow;
  //   case 3: return blue;
  // }
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};
//Função para proximo nivel do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
};
//Função para fim de jogo
let gameOver = () => {
  alert(
    "Pontuação: " +
      score +
      "!\nVocê perdeu o jogo!\nClique em ok para iniciar um novo jogo"
  );
  order = [];
  clickedOrder = [];
  //inicia o jogo novamente
  playGame();
};

//Função de inicio
let playGame = () => {
  alert("Bem vindo ao Genius! Iniciando novo jogo!");
  score = 0;

  nextLevel();
};

//Adicionando os clicks aos botões
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();

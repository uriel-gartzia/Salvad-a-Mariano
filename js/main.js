// GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");

// STATE MANAGEMENT FUNCTIONS
function startGame() {
  console.log("iniciando el juego");
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  let gameObj = new Game();
  console.log(gameObj.gameLoop());

  // gameObj.gameLoop()
}

// ADD EVENT LISTENER
startBtnNode.addEventListener("click", startGame);

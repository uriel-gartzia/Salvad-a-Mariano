// GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");

// STATE MANAGEMENT FUNCTIONS
function startGame() {
  console.log("iniciando el juego");
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  let gameObj = new Game();
  console.log(gameObj)

  gameObj.gameLoop()
}

// ADD EVENT LISTENER
startBtnNode.addEventListener("click", startGame);

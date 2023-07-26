// GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const loseRestartBtnNode = document.querySelector("#lose-restart-btn");
const winRestartBtnNode = document.querySelector("#win-restart-btn")

const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#gameOver-screen");
const gameWinScreenNode = document.querySelector("#gameWin-screen");

const gameBoxNode = document.querySelector("#game-box");

let gameObj = null;

// STATE MANAGEMENT FUNCTIONS
function startGame() {
  console.log("iniciando el juego");
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();
  gameObj.gameLoop();
}

function loseRestartGame() {
  console.log("iniciando el juego");
  gameOverScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
 
  gameObj = new Game();
  gameObj.gameLoop();
}

function winRestartGame() {
  console.log("iniciando el juego");
  gameWinScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();
  gameObj.gameLoop();
}



// ADD EVENT LISTENER
startBtnNode.addEventListener("click", startGame);

document.addEventListener("keydown", (event) => {
  
  if (event.key === "ArrowRight") {
    gameObj.mariano.x += 20;
  } else if (event.key === "ArrowLeft") {
    gameObj.mariano.x -= 20;
  }

  if (event.key === "ArrowDown") {
    gameObj.mariano.y += 20; 
  } else if (event.key === "ArrowUp") {
    gameObj.mariano.y -= 20;
  }
})

loseRestartBtnNode.addEventListener("click", loseRestartGame);

winRestartBtnNode.addEventListener("click", winRestartGame);






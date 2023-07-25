// GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameOverScreenNode = document.querySelector("#gameOver-screen");
const gameWinScreenNode = document.querySelector("#gameWin-screen");

let gameObj = null;

// STATE MANAGEMENT FUNCTIONS
function startGame() {
  console.log("iniciando el juego");
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();
  console.log(gameObj.gameLoop());
}



// ADD EVENT LISTENER
startBtnNode.addEventListener("click", startGame);

restartBtnNode.addEventListener("click", startGame);

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


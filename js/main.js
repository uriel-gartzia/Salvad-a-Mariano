// GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");



let gameObj = null;

// STATE MANAGEMENT FUNCTIONS
function startGame() {
  console.log("iniciando el juego");
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();
  console.log(gameObj.gameLoop());
  // gameObj.gameLoop()
}



// ADD EVENT LISTENER
startBtnNode.addEventListener("click", startGame);

document.addEventListener("keydown", (event) => {
  // console.log(event.key)
  // console.log("presionando una tecla")

  if (event.key === "ArrowRight") {
    gameObj.mariano.x += 20;
    // console.log("patata")
  } else if (event.key === "ArrowLeft") {
    gameObj.mariano.x -= 20;
  }

  if (event.key === "ArrowDown") {
    gameObj.mariano.y += 20; 
  } else if (event.key === "ArrowUp") {
    gameObj.mariano.y -= 20;
  }
})


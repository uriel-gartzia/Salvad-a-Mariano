class Game {
    constructor() {

    }

    gameLoop = () => {
    console.log("ejecutando gameLoop");

    requestAnimationFrame(this.gameLoop)
    }
}
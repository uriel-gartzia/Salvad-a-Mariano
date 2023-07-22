class Game {
  constructor() {
    this.mariano = new Mariano();
  }

  gameLoop = () => {
    console.log("ejecutando gameLoop");

    requestAnimationFrame(this.gameLoop);
  };
}

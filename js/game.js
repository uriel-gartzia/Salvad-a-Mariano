class Game {
  constructor() {
    this.mariano = new Mariano();
    
  }

  gameLoop = () => {
    // console.log("ejecutando gameLoop");

    this.mariano.gravityEffect();

    this.mariano.positionUpdates();

    requestAnimationFrame(this.gameLoop);
  };

 
}

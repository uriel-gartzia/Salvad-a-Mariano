class Game {
  constructor() {
    this.mariano = new Mariano();
    this.coke = new Coke();
    this.bolsa = new Bolsa();
    this.bottle = new Bottle();
    
  }

  gameLoop = () => {
    // console.log("ejecutando gameLoop");

    this.mariano.gravityEffect();

    this.mariano.positionUpdates();

    this.coke.autoMov();

    this.bolsa.autoMov();

    this.bottle.autoMov();

    requestAnimationFrame(this.gameLoop);
  };

 
}

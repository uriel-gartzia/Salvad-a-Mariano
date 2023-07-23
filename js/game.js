class Game {
  constructor() {
    this.mariano = new Mariano();
    this.cokeArr = [];
    this.bagArr = [];
    this.bottleArr = [];

    this.frames = 0;
  }

  cokeSpawning = () => {
    if (this.cokeArr.length === 0 || this.frames % 90 === 0) {

      let randomPositionY = Math.floor(Math.random() * 550);
      console.log(randomPositionY);

      let newCoke = new Coke(randomPositionY);
      this.cokeArr.push(newCoke);
      // console.log(this.cokeArr);
    }
  };

  bagSpawning = () => {
    if (this.bagArr.length === 0 || this.frames % 90 === 0) {

      let randomPositionY = Math.floor(Math.random() * 550);
      console.log(randomPositionY);

      let newBag = new Bag(randomPositionY);
      this.bagArr.push(newBag);
      // console.log(this.bagArr);
    }
  };

  bottleSpawning = () => {
    if (this.bottleArr.length === 0 || this.frames % 90 === 0) {

      let randomPositionY = Math.floor(Math.random() * 550);
      console.log(randomPositionY);

      let newBottle = new Bottle(randomPositionY);
      this.bottleArr.push(newBottle);
      // console.log(this.bottleArr);
    }
  };

  cokeDissappear = () => {
    if (this.cokeArr[0].x < -25) {
      this.cokeArr[0].node.remove();
      this.cokeArr.shift();
    }
  };

  bagDissappear = () => {
    if (this.bagArr[0].x < -100) {
      this.bagArr[0].node.remove();
      this.bagArr.shift();
    }
  };

  bottleDissappear = () => {
    if (this.bottleArr[0].x < -50) {
      this.bottleArr[0].node.remove();
      this.bottleArr.shift();
    }
  };

  gameLoop = () => {
    this.frames++;

    this.mariano.gravityEffect();
    this.mariano.positionUpdates();

    this.cokeSpawning();
    this.cokeArr.forEach((eachCoke) => {
      eachCoke.autoMov();
    });

    this.bagSpawning();
    this.bagArr.forEach((eachBag) => {
      eachBag.autoMov();
    });

    this.bottleSpawning();
    this.bottleArr.forEach((eachBottle) => {
      eachBottle.autoMov();
    });

    this.cokeDissappear();
    this.bagDissappear();
    this.bottleDissappear();

    requestAnimationFrame(this.gameLoop);
  };
}

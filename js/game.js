class Game {
  constructor() {
    this.mariano = new Mariano();
    this.garbageArr = [];

    this.frames = 0;
  }

  garbageSpawning = () => {
    if (this.garbageArr.length === 0 || this.frames % 60 === 0) {
      let randomPositionY = Math.floor(Math.random() * 550);
      console.log(randomPositionY);

      let randomNumber = Math.floor(Math.random() * 3);
      console.log(randomNumber);

      const garbageTypesArr = [
        {
          src: "./Images/def/coke.png",
          size: 35,
          velocity: 2,
        },
        {
          src: "./Images/def/bag.png",
          size: 80,
          velocity: 1.5,
        },
        {
          src: "./Images/def/bottle.png",
          size: 60,
          velocity: 2.5,
        },
      ];
      let garbageProps = garbageTypesArr[randomNumber];
      this.garbageArr.push(
        new Gargabe(
          randomPositionY,
          garbageProps.src,
          garbageProps.size,
          garbageProps.velocity
        )
      );
    }
    console.log(this.garbageArr);
  };

  garbageDissappear = () => {
    if (this.garbageArr[0].x < -75) {
      this.garbageArr[0].node.remove();
      this.garbageArr.shift();
    }
  };

  gravityStop = () => {
    this.mariano.gravityEffect = true;

    if (this.mariano.y === 550) {
      gravityEffect = false;
    }
  }

  gameLoop = () => {
    this.frames++;

    this.mariano.gravityEffect();
    this.mariano.gravityStop();
    this.mariano.positionUpdates();

    this.garbageSpawning();
    this.garbageArr.forEach((eachGarbage) => {
      eachGarbage.autoMov();
    });

    this.garbageDissappear();

    requestAnimationFrame(this.gameLoop);
  };
}

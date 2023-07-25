class Game {
  constructor() {
    this.mariano = new Mariano();
    this.garbageArr = [];

    this.frames = 0;
    this.isGameOn = true;
  };

  gameWin = () => {
    gameBoxNode.innerHTML = "";
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameWinScreenNode.style.display = "flex";
    
  }

  gameOver = () => {
    gameBoxNode.innerHTML = "";
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
  };

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

  collisionMarianoGarbage = () => {
    this.garbageArr.forEach((eachGarbage) => {
      if (
        this.mariano.x < eachGarbage.x + eachGarbage.w &&
        this.mariano.x + this.mariano.w > eachGarbage.x &&
        this.mariano.y < eachGarbage.y + eachGarbage.h &&
        this.mariano.y + this.mariano.h > eachGarbage.y
      ) {
        this.gameOver()
      }
    });
  };

  gameLoop = () => {
    this.frames++;

    this.mariano.gravityEffect();
    this.mariano.positionUpdates();

    this.garbageSpawning();
    this.garbageArr.forEach((eachGarbage) => {
      eachGarbage.autoMov();
    });
    this.garbageDissappear();

    this.collisionMarianoGarbage();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    } 
    }
    
  };


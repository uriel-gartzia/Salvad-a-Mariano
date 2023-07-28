class Game {
  constructor() {
    this.mariano = new Mariano();
    this.garbageArr = [];
    // this.fishArr = [];

    this.life1 = new Life(50);
    this.life2 = new Life(75);
    this.life3 = new Life(100);

    this.counter = 3;

    this.frames = 0;
    this.isGameOn = true;

    this.timer = setTimeout(() => {
      this.gameWin();
    }, 60000);

    this.downloadTimerID = null;

    document.getElementById("timer").innerHTML = "01:00";

    this.timerCountDown();

    this.mySound = new Audio(
      "./audio/music/TODO TIEMPO PASADO FUE PEOR/02-Ikutzen-zaitudanean-2.wav"
    );
    
    this.mySound.volume = 0.1;

    this.mySound2 = new Audio(
      "./audio/music/TODO TIEMPO PASADO FUE PEOR/03-Zeozer sabalean.wav"
    );
    this.mySound2.volume = 0.1;

    this.mySound3 = new Audio(
      "./audio/music/TODO TIEMPO PASADO FUE PEOR/04-Esna nazazu.wav"
    );
    this.mySound3.volume = 0.1;
  }

  gameWin = () => {
    gameBoxNode.innerHTML = "";
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameWinScreenNode.style.display = "flex";
    clearTimeout(this.timer);

    this.mySound.pause();
    this.mySound2.play();

  };

  gameOver = () => {
    gameBoxNode.innerHTML = "";
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
    clearTimeout(this.timer);
    clearInterval(this.downloadTimerID);

    this.mySound.pause();
    this.mySound3.play();

  };

  // fishesSpawning = () => {
  //   if (this.fishArr.length === 0 || this.frames % 45 === 0) {
  //     this.randomNum = Math.floor(Math.random() * 3);
  //     console.log(this.randomNum);
  //     this.newFish = new Fish(this.randomNum, this.src, this.posY);
  //     console.log(this.newFish);
  //     this.fishArr.push(this.newFish);
  //   }
  // };

  garbageSpawning = () => {
    if (this.garbageArr.length === 0 || this.frames % 45 === 0) {
      let randomPositionY = Math.floor(Math.random() * 550);
      // console.log(randomPositionY);

      let randomNumber = Math.floor(Math.random() * 3);
      // console.log(randomNumber);

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
        new Garbage(
          randomPositionY,
          garbageProps.src,
          garbageProps.size,
          garbageProps.velocity
        )
      );
    }
    // console.log(this.garbageArr);
  };

  garbageDissappear = () => {
    if (this.garbageArr[0].x < -75) {
      this.garbageArr[0].node.remove();
      this.garbageArr.shift();
    }
  };

  collisionMarianoGarbage = () => {
    if (this.counter <= 3) {
      this.garbageArr.forEach((eachGarbage, index) => {
        if (
          this.mariano.x < eachGarbage.x + eachGarbage.w &&
          this.mariano.x + this.mariano.w > eachGarbage.x &&
          this.mariano.y < eachGarbage.y + eachGarbage.h &&
          this.mariano.y + this.mariano.h > eachGarbage.y
        ) {
          this.counter--;
          // console.log(this.counter);
          eachGarbage.removeGarbage();
          this.garbageArr.splice(index, 1);

          this.removeLifeConditional();

          this.screamSound = new Audio("./audio/SFX/bird-scream.wav");
          this.screamSound.play();
          this.screamSound.volume = 0.05;
        } else if (this.counter === 0) {
          this.gameOver();
        }
      });
    }
  };

  removeLifeConditional = () => {
    if (this.counter === 2) {
      this.life3.removeLife();
    } else if (this.counter === 1) {
      this.life2.removeLife();
    } else if (this.counter === 0) {
      this.life1.removeLife();
    }
  };

  timerCountDown = () => {
    let timeleft = 59;
    this.downloadTimerID = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(this.downloadTimerID);
        document.getElementById("timer").innerHTML = "00:" + timeleft;
      } else if (timeleft < 10) {
        document.getElementById("timer").innerHTML = "00:0" + timeleft;
      } else {
        document.getElementById("timer").innerHTML = "00:" + timeleft;
      }
      timeleft -= 1;
    }, 1000);
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

    
    this.mySound.play();
    if (this.isGameOn) {
      this.mySound2.pause()
      this.mySound3.pause()
    } else {
      this.mySound.pause()
    }

    // this.fishesSpawning();

    // this.fishArr.forEach((eachFish) => {
    //   eachFish.autoMov();
    // });

    this.collisionMarianoGarbage();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

class Game {
  constructor() {
    this.mariano = new Mariano();
    this.garbageArr = [];
    this.life1 = new Life(50);
    this.life2 = new Life(75);
    this.life3 = new Life(100);

    this.counter = 3;

    this.frames = 0;
    this.isGameOn = true;

    this.timer = setTimeout(() => {
      this.gameWin();
    }, 30000); 

    this.downloadTimerID = null;

    document.getElementById("timer").innerHTML = "00:30";

    this.timerCountDown();

  };

  gameWin = () => {
    gameBoxNode.innerHTML = "";
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameWinScreenNode.style.display = "flex";
    clearTimeout(this.timer);
  };

  gameOver = () => {
    gameBoxNode.innerHTML = "";
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
    clearTimeout(this.timer);
    clearInterval(this.downloadTimerID);
  };

  garbageSpawning = () => {
    if (this.garbageArr.length === 0 || this.frames % 60 === 0) {
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
    if (this.counter === 0) {
      this.gameOver();
    } else if (this.counter <= 3) {
      this.garbageArr.forEach((eachGarbage) => {
      if (
        this.mariano.x < eachGarbage.x + eachGarbage.w &&
        this.mariano.x + this.mariano.w > eachGarbage.x &&
        this.mariano.y < eachGarbage.y + eachGarbage.h &&
        this.mariano.y + this.mariano.h > eachGarbage.y
      ) {
        this.counter--;
       
        eachGarbage.removeGarbage();
        this.garbageArr.splice(4, 0);
        console.log(this.garbageArr);
        // this.gameOver();
      }
    })
    }
  };

  timerCountDown = () => {
    let timeleft = 29;
    this.downloadTimerID = setInterval(function() {
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

    this.collisionMarianoGarbage();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    } 
    }
    
  };


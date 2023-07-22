// console.log("desde Mariano");

class Mariano {
  constructor() {
    // console.log("esto ocurre una vez cuando se crea un mariano");
    this.node = document.createElement("img");
    this.node.src = "./Images/def/mariano.png";
    gameBoxNode.append(this.node);

    this.x = 50;
    this.y = 50;
    this.w = 100;
    this.h = 40;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  gravityEffect = () => {

    this.y += 0.5;
    console.log(this.y)
    // this.node.style.top = `${this.y}px`;
    // this.positionUpdates()

  }

  positionUpdates = () => {
    
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }
}

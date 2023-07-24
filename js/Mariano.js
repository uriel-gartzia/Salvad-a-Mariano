class Mariano {
  constructor() {
    // console.log("esto ocurre una vez cuando se crea un mariano");
    this.node = document.createElement("img");
    this.node.src = "./Images/def/mariano.png";
    gameBoxNode.append(this.node);

    this.x = 50;
    this.y = 50;
    this.w = 130;
    this.h = 50;

    this.gravitySpeed = 0.5;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  gravityEffect = () => {
    this.y += this.gravitySpeed;
    this.positionUpdates();
  };

  positionUpdates = () => {
    // this.x = easelinear(0, 200, 300, 1)
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  };
}

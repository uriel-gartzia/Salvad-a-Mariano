class Mariano {
  constructor() {
    
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

    if (this.y === 525) {
      this.gravitySpeed = 0;
      // this.node.src = "./Images/provisionales/mariano-de-pie.png";
      // this.w = 130;
      // this.h = 50;
      // this.node.style.width = `${this.w}px`;
      // this.node.style.height = `${this.h}px`;
    }
  };

  positionUpdates = () => {
    
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  };
}

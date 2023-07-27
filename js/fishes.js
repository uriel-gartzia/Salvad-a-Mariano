class Fish {
  constructor(typeFish, src, posY) {
    this.node = document.createElement("img");
    gameBoxNode.append(this.node);

    this.x = gameBoxNode.offsetWidth;
    
    this.w = 50;
    this.h = 50;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.posY}px`;
    this.node.style.left = `${this.x}px`;

    if (typeFish === 0) {
      this.node.src = "./Images/def/fish1.png";
      this.posY = 300;
      this.typeFish = typeFish;
      
    } else if (typeFish === 1) {
      this.node.src = "./Images/def/fish2.png";
      this.posY = 450;
      this.typeFish = typeFish;

    } else if (typeFish === 2) {
      this.node.src = "./Images/def/fish3.png";
      this.posY = 600;
      this.typeFish = typeFish;
    }
  }
  positionUpdates = () => {
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.posY}px`;
    this.node.style.position = "absolute";
  };

  autoMov = () => {
    this.x -= 0.5;
    this.positionUpdates();
  };
}

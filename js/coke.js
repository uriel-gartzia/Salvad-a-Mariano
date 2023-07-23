class Coke {
  constructor(posY) {
    this.node = document.createElement("img");
    this.node.src = "./Images/def/coke.png";
    gameBoxNode.append(this.node);

    this.x = gameBoxNode.offsetWidth;
    this.y = posY;
    this.w = 35;
    this.h = 35;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  autoMov = () => {
    this.x -= 2;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.node.style.left = `${this.x}px`;
  };
}

class Bag {
  constructor(posY, randomNumber) {
    if (randomNumber === 1) {
      foto
      velocidad
    }
    this.node = document.createElement("img");
    this.node.src = "./Images/def/bag.png";
    gameBoxNode.append(this.node);

    if .-...
    this.x = gameBoxNode.offsetWidth;
    this.y = posY;
    this.w = 80;
    this.h = 80;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  autoMov = () => {
    if (randomNumber === 1) {

      this.x -= 1.5;
    } 
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.node.style.left = `${this.x}px`;
  };
}

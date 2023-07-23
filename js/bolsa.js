class Bolsa {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./Images/def/bolsa.png";
    gameBoxNode.append(this.node);

    this.x = gameBoxNode.offsetWidth;
    this.y = 150;
    this.w = 80;
    this.h = 80;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  autoMov = () => {
    this.x -= 1;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.node.style.left = `${this.x}px`;
  };
}

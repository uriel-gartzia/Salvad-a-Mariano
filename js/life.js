class Life {
  constructor(posX) {
    this.node = document.createElement("img");
    this.node.src = "./Images/def/life.png";

    gameScreenNode.append(this.node);

    this.x = posX;
    this.y = 60;
    this.w = 20;
    this.h = 20;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }
}

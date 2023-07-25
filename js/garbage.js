class Garbage {
  constructor(posY, src, size, velocity) {
    this.node = document.createElement("img");
    this.node.src = src;
    this.w = size;
    this.h = size;
    this.velocity = velocity;

    gameBoxNode.append(this.node); // esto añade un elemento al DOM

    this.x = gameBoxNode.offsetWidth;
    this.y = posY;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  autoMov = () => {
    this.x -= this.velocity;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.node.style.left = `${this.x}px`;
  };
}

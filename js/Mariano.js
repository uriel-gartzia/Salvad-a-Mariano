// console.log("desde Mariano");

class Mariano {
  constructor() {
    // console.log("esto ocurre una vez cuando se crea un mariano");
    this.node = document.createElement("img");
    this.node.src = "./Images/provisionales/Group.png";
    gameBoxNode.append(this.node);

  }
}

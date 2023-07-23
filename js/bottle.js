class Bottle {
    constructor() {
        this.node = document.createElement("img");
        this.node.src = "./Images/def/bottle.png";
        gameBoxNode.append(this.node);

        this.x = gameBoxNode.offsetWidth;
        this.y = 350;
        this.w = 60;
        this.h = 60;
    
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    };

    autoMov = () => {
        this.x -= 2.5;
        this.positionUpdate();

    };

    positionUpdate = () => {
        this.node.style.left = `${this.x}px`;
    };
   
}
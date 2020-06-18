const canvas = sl("<canvas>");
const ctx = canvas.getContext("2d");

let image = ce("img.img-sun");
image.src = './images/sun.png';

export class Sun {
    constructor(radius) {
        this.radius = radius;
        this.x = canvas.width / 2 - (radius / 2);
        this.y = canvas.height  / 2 - (radius / 2);
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(image, this.x, this.y, this.radius, this.radius);
    }
    update() {

        this.draw();
    }
}
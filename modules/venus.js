import { rotate } from './rotate.js';

const canvas = sl("<canvas>");
const ctx = canvas.getContext("2d");

const image = ce("img.img-venus"); image.src = './images/venus.png';

export class Venus {
    constructor(radius) {
        this.radius = radius;
        this.x = canvas.width / 2 - 190 + (this.radius / 2);
        this.y = canvas.height / 2 - 190 + (this.radius / 2);
        this.tick = 0;
        this.tickSpeed = 0.2;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 170 + (this.radius / 2), 0, 2 * Math.PI);
        ctx.strokeStyle = '#696969';
        ctx.stroke();


        ctx.beginPath();
        ctx.drawImage(image, this.x, this.y, this.radius, this.radius);
    }
    update() {
        this.x = rotate(canvas.width / 2 - (this.radius / 2), canvas.height / 2 - (this.radius / 2), this.x, this.y, this.tickSpeed).x;
        this.y = rotate(canvas.width / 2 - (this.radius / 2), canvas.height / 2 - (this.radius / 2), this.x, this.y, this.tickSpeed).y;
        this.tick += this.tickSpeed;


        if (this.tick >= 360) {
            this.tick = 0;
            this.x = canvas.width / 2 - 190 + (this.radius / 2);
            this.y = canvas.height / 2 - 190 + (this.radius / 2);
        }

        this.draw();
    }
}
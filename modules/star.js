const canvas = sl("<canvas>");
const ctx = canvas.getContext("2d");

let starID = 0;
export let stars = [];
export class Star {
    constructor() {
        starID++;

        this.starID = starID;

        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.height);

        this.moveY = Math.random() * (Math.floor(Math.random() * 5)) / 2;
        this.moveX = Math.random() * (Math.floor(Math.random() * 5)) / 2;

        this.radius = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#e3e3e3';
        ctx.fill();

    }
    update() {
        if (this.x > canvas.width) this.moveX = -Math.floor(Math.random() * 2);
        if (this.x < 0) this.moveX = Math.floor(Math.random() * 2);
        if (this.y > canvas.height) this.moveY = -(Math.floor(Math.random() * 2));
        if (this.y < 0) this.moveY = (Math.floor(Math.random() * 2));

        this.x += this.moveX;
        this.y += this.moveY;

        this.draw();
    }
}
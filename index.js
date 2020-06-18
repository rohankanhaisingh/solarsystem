import { stars, Star } from './modules/star.js';

// Import the star and the planets
import { Sun } from './modules/sun.js';
import { Mercury } from './modules/mercury.js';
import { Venus } from './modules/venus.js';
import { Earth } from './modules/earth.js'; 
import { Mars } from './modules/mars.js'; 
import { Jupiter } from './modules/jupiter.js'; 
import { Saturn } from './modules/saturn.js'; 

const canvas = sl("<canvas>");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let updatespeed = 1000 / 60; // Stable 60 frames per second.

const init = () => {

    sl(".textblock").remove();

    const sun = new Sun(140); // Create the sun
    const mercury = new Mercury(35); // Create mercury.
    const venus = new Venus(50); // Create venus.
    const earth = new Earth(75); // Create earth.
    const mars = new Mars(50); // Create mars.
    const jupiter = new Jupiter(85); // Create mars.
    const saturn = new Saturn(60); // Create mars.

    // Summon the stars
    for (var i = 0; i < 192; i++) stars.push(new Star());

    let update = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000';
        ctx.fill();

        if (typeof stars == 'object') {
            stars.forEach((star) => {
                if (typeof star.update !== 'undefined') {
                    star.update();
                }
            });
        }

        if (typeof sun !== 'undefined') sun.update();
        if (typeof mercury !== 'undefined') mercury.update();
        if (typeof venus !== 'undefined') venus.update();
        if (typeof earth !== 'undefined') earth.update();
        if (typeof mars !== 'undefined') mars.update();
        if (typeof jupiter !== 'undefined') jupiter.update();
        if (typeof saturn !== 'undefined') saturn.update();

        setTimeout(update, updatespeed);
    }
    update();
}
init();
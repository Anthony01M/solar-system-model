const canvas = document.getElementById('solarSystemCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const sun = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 50,
    color: 'yellow'
};

const planets = [
    { name: 'Mercury', radius: 10, distance: 100, angle: 0, speed: 0.01, color: 'gray' },
    { name: 'Venus', radius: 15, distance: 150, angle: 0, speed: 0.008, color: 'orange' },
    { name: 'Earth', radius: 20, distance: 200, angle: 0, speed: 0.006, color: 'blue' },
    { name: 'Mars', radius: 18, distance: 250, angle: 0, speed: 0.005, color: 'red' },
    { name: 'Jupiter', radius: 30, distance: 300, angle: 0, speed: 0.004, color: 'brown' },
    { name: 'Saturn', radius: 25, distance: 350, angle: 0, speed: 0.003, color: 'purple' },
    { name: 'Uranus', radius: 22, distance: 400, angle: 0, speed: 0.002, color: 'green' },
    { name: 'Neptune', radius: 23, distance: 450, angle: 0, speed: 0.001, color: 'blue' }
];

function drawSun() {
    ctx.beginPath();
    ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = sun.color;
    ctx.fill();
    ctx.closePath();
}

function drawPlanets() {
    planets.forEach(planet => {
        const x = sun.x + planet.distance * Math.cos(planet.angle);
        const y = sun.y + planet.distance * Math.sin(planet.angle);

        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = planet.color;
        ctx.fill();
        ctx.closePath();

        planet.x = x;
        planet.y = y;

        planet.angle += planet.speed;
    });
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSun();
    drawPlanets();
}

animate();
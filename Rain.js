Qualtrics.SurveyEngine.addOnload(function() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '1000';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const raindrops = [];
    const maxRaindrops = 200;

    for (let i = 0; i < maxRaindrops; i++) {
        raindrops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 20 + 10,
            speed: Math.random() * 5 + 5,
        });
    }

    function updateRaindrops() {
        for (let drop of raindrops) {
            drop.y += drop.speed;
            if (drop.y > canvas.height) {
                drop.y = -drop.length;
                drop.x = Math.random() * canvas.width;
            }
        }
    }

    function drawRaindrops() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(0, 191, 255, 0.8)';
        for (let drop of raindrops) {
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.stroke();
        }
    }

    function animate() {
        updateRaindrops();
        drawRaindrops();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // 5 seconds
});

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

    const bars = [];
    const maxBars = 10;

    for (let i = 0; i < maxBars; i++) {
        bars.push({
            x: -Math.random() * 200,
            y: i * (canvas.height / maxBars),
            width: Math.random() * 100 + 50,
            height: 10,
            speed: Math.random() * 2 + 1,
        });
    }

    function updateBars() {
        for (let bar of bars) {
            bar.x += bar.speed;
            if (bar.x > canvas.width) {
                bar.x = -bar.width;
            }
        }
    }

    function drawBars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0, 150, 255, 0.6)';
        for (let bar of bars) {
            ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
        }
    }

    function animate() {
        updateBars();
        drawBars();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // 5 seconds
});

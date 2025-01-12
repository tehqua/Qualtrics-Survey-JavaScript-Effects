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

    const stars = [];
    const maxStars = 50;

    for (let i = 0; i < maxStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 10 + 5,
            speedX: Math.random() * 4 + 2,
            speedY: Math.random() * 4 + 2,
        });
    }

    function updateStars() {
        for (let star of stars) {
            star.x += star.speedX;
            star.y += star.speedY;
            if (star.x > canvas.width || star.y > canvas.height) {
                star.x = Math.random() * canvas.width / 2;
                star.y = Math.random() * canvas.height / 2;
            }
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        for (let star of stars) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x - star.length, star.y - star.length);
            ctx.stroke();
        }
    }

    function animate() {
        updateStars();
        drawStars();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // 5 seconds
});

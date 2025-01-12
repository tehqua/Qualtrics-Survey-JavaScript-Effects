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

    const particles = [];

    function explode(x, y) {
        for (let i = 0; i < 100; i++) {
            particles.push({
                x,
                y,
                speedX: Math.random() * 4 - 2,
                speedY: Math.random() * 4 - 2,
                alpha: 1,
            });
        }
    }

    function updateParticles() {
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.alpha -= 0.02;
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            if (particle.alpha <= 0) return;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 69, 0, ${particle.alpha})`;
            ctx.fill();
        });
    }

    function animate() {
        if (Math.random() < 0.05) explode(Math.random() * canvas.width, Math.random() * canvas.height);
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // 5 seconds
});
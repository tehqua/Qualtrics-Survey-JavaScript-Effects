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
    const maxParticles = 200;

    for (let i = 0; i < maxParticles; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speedX: Math.random() * 2 + 1,
            speedY: Math.random() * 0.5 + 0.5
        });
    }

    function updateParticles() {
        for (let particle of particles) {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            if (particle.x > canvas.width) {
                particle.x = -particle.radius;
                particle.y = Math.random() * canvas.height;
            }
            if (particle.y > canvas.height) {
                particle.y = -particle.radius;
                particle.x = Math.random() * canvas.width;
            }
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(200, 200, 200, 0.7)';
        for (let particle of particles) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // 5 seconds
});

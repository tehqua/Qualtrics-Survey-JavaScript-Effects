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
    const maxParticles = 50;

    function createParticle(x, y) {
        particles.push({
            x,
            y,
            alpha: 1,
            radius: Math.random() * 5 + 2,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
        });
    }

    function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            p.alpha -= 0.02;

            if (p.alpha <= 0) {
                particles.splice(i, 1);
            }
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 150, 0, ${p.alpha})`;
            ctx.fill();
        });
    }

    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', (event) => {
        createParticle(event.clientX, event.clientY);
    });

    animate();
});

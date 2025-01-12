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

    const bubbles = [];
    const maxBubbles = 100;

    for (let i = 0; i < maxBubbles; i++) {
        bubbles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            speed: Math.random() * 2 + 1,
        });
    }

    function updateBubbles() {
        for (let bubble of bubbles) {
            bubble.y -= bubble.speed;
            if (bubble.y < 0) {
                bubble.y = canvas.height;
                bubble.x = Math.random() * canvas.width;
            }
        }
    }

    function drawBubbles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(173, 216, 230, 0.7)';
        for (let bubble of bubbles) {
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        updateBubbles();
        drawBubbles();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // 5 seconds
});

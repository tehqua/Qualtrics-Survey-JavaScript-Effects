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

    const leaves = [];
    const maxLeaves = 50;

    for (let i = 0; i < maxLeaves; i++) {
        leaves.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 15 + 10,
            speed: Math.random() * 2 + 1,
            angle: Math.random() * 360,
        });
    }

    function updateLeaves() {
        for (let leaf of leaves) {
            leaf.y += leaf.speed;
            leaf.angle += 2;
            if (leaf.y > canvas.height) leaf.y = -leaf.size;
        }
    }

    function drawLeaves() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 140, 0, 0.8)';
        for (let leaf of leaves) {
            ctx.save();
            ctx.translate(leaf.x, leaf.y);
            ctx.rotate((leaf.angle * Math.PI) / 180);
            ctx.fillRect(-leaf.size / 2, -leaf.size / 2, leaf.size, leaf.size / 2);
            ctx.restore();
        }
    }

    function animate() {
        updateLeaves();
        drawLeaves();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // 5 seconds
});

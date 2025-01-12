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

    const envelopes = [];
    const maxEnvelopes = 30; // Giảm số lượng lì xì xuống 30
    const envelopeWidth = 40; // Cố định chiều rộng
    const envelopeHeight = 60; // Cố định chiều cao

    for (let i = 0; i < maxEnvelopes; i++) {
        envelopes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            speed: Math.random() * 4 + 3, // Tăng tốc độ (từ 3 đến 7)
            angle: Math.random() * 360,
            rotationSpeed: Math.random() * 1 - 0.5 // Tốc độ xoay nhẹ
        });
    }

    function updateEnvelopes() {
        for (let envelope of envelopes) {
            envelope.y += envelope.speed; // Tăng tốc độ rơi
            envelope.angle += envelope.rotationSpeed;

            if (envelope.y > canvas.height) {
                envelope.y = -envelopeHeight; // Reset vị trí khi rơi xuống dưới màn hình
                envelope.x = Math.random() * canvas.width;
            }
        }
    }

    function drawEnvelopes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let envelope of envelopes) {
            ctx.save();
            ctx.translate(envelope.x, envelope.y);
            ctx.rotate((envelope.angle * Math.PI) / 180);

            // Vẽ phong bì đỏ
            ctx.fillStyle = 'rgba(255, 100, 100, 0.9)'; // Màu đỏ nhạt hơn
            ctx.fillRect(-envelopeWidth / 2, -envelopeHeight / 2, envelopeWidth, envelopeHeight);

            // Vẽ nút vàng
            ctx.beginPath();
            ctx.arc(0, envelopeHeight / 4, 5, 0, Math.PI * 2); // Nút vàng ở giữa phong bì
            ctx.fillStyle = 'gold';
            ctx.fill();

            // Vẽ chữ "福" (may mắn)
            ctx.fillStyle = 'gold';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('福', 0, envelopeHeight / 8); // Chữ ở vị trí trung tâm
            ctx.restore();
        }
    }

    function animate() {
        updateEnvelopes();
        drawEnvelopes();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // 5 seconds
});
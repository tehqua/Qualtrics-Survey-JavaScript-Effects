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

    const coins = [];
    const maxCoins = 15; // Số lượng đồng xu
    const coinSize = 50; // Kích thước đồng xu

    for (let i = 0; i < maxCoins; i++) {
        coins.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            speed: Math.random() * 2 + 3, // Tốc độ rơi
            rotation: Math.random() * 360, // Góc xoay ban đầu
            rotationSpeed: Math.random() * 5 - 2.5 // Tốc độ xoay
        });
    }

    function updateCoins() {
        for (let coin of coins) {
            coin.y += coin.speed;
            coin.rotation += coin.rotationSpeed;

            if (coin.y > canvas.height) {
                coin.y = -coinSize;
                coin.x = Math.random() * canvas.width;
            }
        }
    }

    function drawCoins() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let coin of coins) {
            ctx.save();
            ctx.translate(coin.x, coin.y);
            ctx.rotate((coin.rotation * Math.PI) / 180);

            // Vẽ nền đồng xu
            ctx.beginPath();
            ctx.arc(0, 0, coinSize / 2, 0, Math.PI * 2);
            ctx.fillStyle = '#FFC107'; // Màu vàng nền
            ctx.fill();
            ctx.strokeStyle = '#FFB300'; // Viền vàng đậm hơn
            ctx.lineWidth = 3;
            ctx.stroke();

            // Vẽ họa tiết trên viền
            for (let i = 0; i < 20; i++) {
                const angle = (i * Math.PI * 2) / 20;
                const innerRadius = coinSize / 2 - 5;
                const outerRadius = coinSize / 2 - 2;
                ctx.beginPath();
                ctx.moveTo(innerRadius * Math.cos(angle), innerRadius * Math.sin(angle));
                ctx.lineTo(outerRadius * Math.cos(angle), outerRadius * Math.sin(angle));
                ctx.strokeStyle = '#D17B00'; // Màu nâu
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            // Vẽ biểu tượng "$"
            ctx.fillStyle = '#8B4513'; // Màu nâu của biểu tượng
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('$', 0, 0);

            ctx.restore();
        }
    }

    function animate() {
        updateCoins();
        drawCoins();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // Hiệu ứng kéo dài 5 phút
});

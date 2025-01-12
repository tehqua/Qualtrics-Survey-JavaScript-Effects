Qualtrics.SurveyEngine.addOnload(function() {
    /*Place your JavaScript here to run when the page loads*/
    /*Place your JavaScript here to run when the page is unloaded*/

    // Create a full-page canvas for the snow effect
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworksCanvas';
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

    const snowflakes = [];
    const maxSnowflakes = 100;

    // Initialize snowflakes
    for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1, // Size of the snowflake
            speed: Math.random() * 2 + 1, // Falling speed
            wind: (Math.random() - 0.5) * 2 // Horizontal movement
        });
    }

    // Function to update snowflake positions
    function updateSnowflakes() {
        for (let flake of snowflakes) {
            flake.y += flake.speed;
            flake.x += flake.wind;

            // Reset snowflake position when it goes out of bounds
            if (flake.y > canvas.height) {
                flake.y = 0; // Reset to top
                flake.x = Math.random() * canvas.width; // Random horizontal position
            }
            if (flake.x > canvas.width || flake.x < 0) {
                flake.x = Math.random() * canvas.width; // Re-enter from the opposite side
            }
        }
    }

    // Function to draw snowflakes
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let flake of snowflakes) {
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // White snowflakes with slight transparency
            ctx.fill();
        }
    }

    // Animation loop
    function animate() {
        updateSnowflakes();
        drawSnowflakes();
        requestAnimationFrame(animate);
    }

    // Start the animation
    animate();

    // Remove canvas after a delay
    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // Snow effect lasts for 5 seconds

});

Qualtrics.SurveyEngine.addOnReady(function() {
    /*Place your JavaScript here to run when the page is fully displayed*/
    /*Place your JavaScript here to run when the page is unloaded*/

    // Create a full-page canvas for the snow effect
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworksCanvas';
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

    const snowflakes = [];
    const maxSnowflakes = 100;

    // Initialize snowflakes
    for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1, // Size of the snowflake
            speed: Math.random() * 2 + 1, // Falling speed
            wind: (Math.random() - 0.5) * 2 // Horizontal movement
        });
    }

    // Function to update snowflake positions
    function updateSnowflakes() {
        for (let flake of snowflakes) {
            flake.y += flake.speed;
            flake.x += flake.wind;

            // Reset snowflake position when it goes out of bounds
            if (flake.y > canvas.height) {
                flake.y = 0; // Reset to top
                flake.x = Math.random() * canvas.width; // Random horizontal position
            }
            if (flake.x > canvas.width || flake.x < 0) {
                flake.x = Math.random() * canvas.width; // Re-enter from the opposite side
            }
        }
    }

    // Function to draw snowflakes
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let flake of snowflakes) {
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // White snowflakes with slight transparency
            ctx.fill();
        }
    }

    // Animation loop
    function animate() {
        updateSnowflakes();
        drawSnowflakes();
        requestAnimationFrame(animate);
    }

    // Start the animation
    animate();

    // Remove canvas after a delay
    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // Snow effect lasts for 5 seconds
});

Qualtrics.SurveyEngine.addOnUnload(function() {
    /*Place your JavaScript here to run when the page is unloaded*/

    // Create a full-page canvas for the snow effect
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworksCanvas';
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

    const snowflakes = [];
    const maxSnowflakes = 100;

    // Initialize snowflakes
    for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1, // Size of the snowflake
            speed: Math.random() * 2 + 1, // Falling speed
            wind: (Math.random() - 0.5) * 2 // Horizontal movement
        });
    }

    // Function to update snowflake positions
    function updateSnowflakes() {
        for (let flake of snowflakes) {
            flake.y += flake.speed;
            flake.x += flake.wind;

            // Reset snowflake position when it goes out of bounds
            if (flake.y > canvas.height) {
                flake.y = 0; // Reset to top
                flake.x = Math.random() * canvas.width; // Random horizontal position
            }
            if (flake.x > canvas.width || flake.x < 0) {
                flake.x = Math.random() * canvas.width; // Re-enter from the opposite side
            }
        }
    }

    // Function to draw snowflakes
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let flake of snowflakes) {
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // White snowflakes with slight transparency
            ctx.fill();
        }
    }

    // Animation loop
    function animate() {
        updateSnowflakes();
        drawSnowflakes();
        requestAnimationFrame(animate);
    }

    // Start the animation
    animate();

    // Remove canvas after a delay
    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 500000); // Snow effect lasts for 5 seconds
});
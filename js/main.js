window.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon-circle');
    icons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(-180px)';
        icon.style.display = 'flex';
        icon.style.animation = `fall 0.6s ease forwards`;
        icon.style.animationDelay = `${index * 0.2}s`;
    });

    const buttons = document.querySelectorAll('.btn-flotante');
    buttons.forEach((btn, index) => {
        btn.classList.add('fall-start');
        setTimeout(() => {
            btn.classList.add('fall-end');
        }, index * 200 + 200);
    });

    function animateLine(elementId, delayOffset, callback) {
        const title = document.getElementById(elementId);
        const words = title.innerText.split(' ');
        title.innerHTML = '';

        title.style.visibility = 'visible';

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.innerText = word;
            span.style.display = 'inline-block';
            span.style.marginRight = '10px';
            span.style.opacity = '0';
            span.style.transform = 'translateY(-180px)';
            span.style.animation = `fall 0.6s ease forwards`;
            span.style.animationDelay = `${delayOffset + index * 0.3}s`;
            title.appendChild(span);

            if (index === words.length - 1 && typeof callback === 'function') {
                const totalTime = delayOffset + (words.length * 0.3);
                setTimeout(callback, totalTime * 1000);
            }
        });
    }

    const baseDelay = (icons.length * 0.2) + (buttons.length * 0.2);


    animateLine('animated-title-line1', baseDelay, () => {
        const glitchEl = document.getElementById('glitch');
        glitchEl.classList.add('show');
        
        setTimeout(() => {
            const webContainer = document.querySelector('.web-container');
            webContainer.classList.add('show');
        }, 500); // espera un poco antes de mostrar el siguiente elemento
    });

    setTimeout(() => {
        const hero2 = document.getElementById('hero2');
        hero2.scrollIntoView({ behavior: 'smooth' });
    }, 7000);


});

function initStars(canvasId, count) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    resizeCanvas();

    let stars = [];

    function randomColor() {
        const colors = ['#ffffff', '#ffe9c4', '#d4fbff', '#ffd6d6'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.2 + 0.3,
                speed: Math.random() * 0.05 + 0.01,
                color: randomColor(),
                alpha: Math.random() * 0.5 + 0.5
            });
        }
    }

    createStars();

    window.addEventListener('resize', () => {
        resizeCanvas();
        createStars();
    });

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let s of stars) {
            ctx.globalAlpha = s.alpha;
            ctx.fillStyle = s.color;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    function updateStars() {
        for (let s of stars) {
            s.x += s.speed;
            if (s.x > canvas.width) {
                s.x = -s.size;
                s.y = Math.random() * canvas.height;
                s.size = Math.random() * 1.2 + 0.3;
                s.speed = Math.random() * 0.05 + 0.01;
                s.color = randomColor();
                s.alpha = Math.random() * 0.5 + 0.5;
            }
        }
    }

    function loop() {
        updateStars();
        drawStars();
        requestAnimationFrame(loop);
    }

    loop();
}

window.addEventListener('load', () => {
    initStars('starCanvas1', 500); 
    initStars('starCanvas2', 500); 
});

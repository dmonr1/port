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
        document.getElementById('animated-title-line2').classList.remove('hidden-line');
        animateLine('animated-title-line2', 0, () => {
            const webContainer = document.querySelector('.web-container');
            webContainer.classList.add('show');
        });
    });

    setTimeout(() => {
        const hero2 = document.getElementById('hero2');
        hero2.scrollIntoView({ behavior: 'smooth' });
    }, 1000);


});


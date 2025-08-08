window.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon-circle');
    icons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(-180px)';
        icon.style.display = 'flex';
        icon.style.animation = `fall 0.6s ease forwards`;
        icon.style.animationDelay = `${index * 0.2}s`;
    });

    // 🎯 Añadimos animación a los botones
    const buttons = document.querySelectorAll('.btn-flotante');
    buttons.forEach((btn, index) => {
        btn.classList.add('fall-start');
        setTimeout(() => {
            btn.classList.add('fall-end');
        }, index * 200 + 200); // retraso
    });
 

    const title = document.getElementById('animated-title');
    const words = title.innerText.split(' ');

    title.innerHTML = '';

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.innerText = word;
        span.style.display = 'inline-block';
        span.style.marginRight = '10px';
        span.style.opacity = '0';
        span.style.transform = 'translateY(-180px)';
        span.style.animation = `fall 0.6s ease forwards`;
        span.style.animationDelay = `${(icons.length * 0.2) + (buttons.length * 0.2) + index * 0.3}s`;
        title.appendChild(span);
    });
});

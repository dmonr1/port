document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    // Animar íconos primero
    const icons = document.querySelectorAll('.icon-circle');
    icons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.classList.add('fall-in');
        icon.style.animationDelay = `${index * 0.2}s`;
    });

    // Animar título palabra por palabra
    const title = document.getElementById('animated-title');
    const words = title.innerText.split(' ');
    title.innerHTML = '';

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.innerText = word;
        span.style.display = 'inline-block';
        span.style.marginRight = '10px';
        span.classList.add('fall-in');
        span.style.animationDelay = `${(icons.length * 0.2) + index * 0.3}s`;
        title.appendChild(span);
    });
});

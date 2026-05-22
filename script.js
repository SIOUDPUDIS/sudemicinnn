function checkPassword() {
    const input = document.getElementById('password-input').value.trim().toLowerCase();
    const errorMsg = document.getElementById('error-msg');
    const loginCard = document.getElementById('login-card');
    const contentCard = document.getElementById('content-card');

    // Giriş anahtarları
    if (input === 'prwda_cano' || input === 'sude') {
        loginCard.style.display = 'none';
        contentCard.style.display = 'block';
        createHeartRain(); // Kalp yağmurunu tetikle
    } else {
        errorMsg.style.display = 'block';
        loginCard.style.transform = 'translateX(10px)';
        setTimeout(() => loginCard.style.transform = 'translateX(-10px)', 100);
        setTimeout(() => loginCard.style.transform = 'translateX(0)', 200);
    }
}

function createHeartRain() {
    setInterval(() => {
        const heartRain = document.createElement('div');
        heartRain.className = 'falling-heart';
        heartRain.innerText = '❤️';

        // Taşmayı önlemek için ekran genişliği sınırlaması
        const screenWidth = window.innerWidth - 30;
        heartRain.style.left = Math.random() * screenWidth + 15 + 'px';

        heartRain.style.fontSize = Math.random() * 15 + 12 + 'px';
        heartRain.style.opacity = Math.random() * 0.5 + 0.5;

        const duration = Math.random() * 2000 + 3000;
        heartRain.style.transition = `transform ${duration}ms linear`;

        document.body.appendChild(heartRain);

        setTimeout(() => {
            const screenHeight = window.innerHeight + 40;
            heartRain.style.transform = `translateY(${screenHeight}px) rotate(${Math.random() * 360}deg)`;
        }, 50);

        setTimeout(() => {
            heartRain.remove();
        }, duration);
    }, 400);
}

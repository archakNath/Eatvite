if (localStorage.getItem('username') == null) {
    document.querySelector('.login-page').style.display = "flex";
} else if (localStorage.getItem('mode') == null) {
    document.querySelector('.mode-choice').style.display = 'flex';
}

document.getElementById('loginBtn').onclick = () => {
    window.location.href = '/page/login.html';
}


// mode card selected
const cards = document.querySelectorAll('.modeCard');
cards.forEach(card => {
    card.onclick = () => {
        localStorage.setItem('mode', card.querySelector('h1').textContent);
        window.location.href = '/index.html';
    }
});
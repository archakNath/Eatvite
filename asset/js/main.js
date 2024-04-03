if (localStorage.getItem('username') == null) {
    document.querySelector('.login-page').style.display = "flex";
} else if (localStorage.getItem('mode') == null) {
    document.querySelector('.mode-choice').style.display = 'flex';
} else if (localStorage.getItem('address') == null) {
    document.querySelector('.basic-details').style.display = 'flex';
} else {
    if (localStorage.getItem('mode') == 'Donors') {
        document.querySelector('main .profile-pane .top-mode').style.backgroundImage = 'url(/asset/resource/background/donar.png)';
        document.querySelector('main .profile-pane .bottom-details h3').style.color = 'var(--donor-blue)';
    } else {
        document.querySelector('main .profile-pane .top-mode').style.backgroundImage = 'url(/asset/resource/background/distributor.png)';
        document.querySelector('main .profile-pane .bottom-details h3').style.color = 'var(--receiver-orange)';
    }
    document.querySelector('main .profile-pane .bottom-details h3').textContent = localStorage.getItem('mode');
    document.querySelector('main .profile-pane .bottom-details h1').textContent = localStorage.getItem('name');
    document.querySelector('main .profile-pane .bottom-details p').textContent = localStorage.getItem('address');
    document.querySelector('main .profile-pane .bottom-details span').textContent = localStorage.getItem('username');
    document.querySelector('main .content-pane .add-post span').textContent = getInitials(localStorage.getItem('name'));
}

document.getElementById('loginBtn').onclick = () => {
    window.location.href = '/page/login.html';
}


// mode card selected
const cards = document.querySelectorAll('.modeCard');
cards.forEach(card => {
    card.onclick = () => {
        localStorage.setItem('mode', card.querySelector('h1').textContent);
        document.querySelector('.mode-choice').style.display = 'none';
        document.querySelector('.basic-details').style.display = 'flex';
    }
});


// address added button
const nameInput = document.getElementById('nameInput');
const usernameInput = document.getElementById('usernameInput');
const streetInput = document.getElementById('streetInput');
const address2Input = document.getElementById('address2Input');
const cityInput = document.getElementById('cityInput');
const stateInput = document.getElementById('stateInput');
const postalInput = document.getElementById('postalInput');
const countryInput = document.getElementById('countryInput');
const phoneInput = document.getElementById('phoneInput');

document.getElementById('basicDetailsButton').onclick = () => {
    var fullAddress = `${streetInput.value}, ${address2Input.value}, ${cityInput.value}, ${stateInput.value}, PIN - ${postalInput.value}, ${countryInput.value}, Phone - ${phoneInput.value}`
    localStorage.setItem('address', fullAddress);
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('username', usernameInput.value);
    location.reload();
}

// get initials
function getInitials(name) {
    const words = name.split(" ");
    let initials = "";
    words.forEach(word => {
        initials += word.charAt(0).toUpperCase();
    });
    return initials;
}


const newPost = document.querySelector('.new-post')
// close add post
document.querySelector('.new-post .close').onclick = () => {
    newPost.style.display = 'none';
}
document.querySelector('main .content-pane .inside').onclick = () => {
    newPost.style.display = 'flex';
}

// get location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    sessionStorage.setItem('latitude', latitude);
    sessionStorage.setItem('longitude', longitude);
    const locationDisplay = document.querySelector('.new-post .location');
    locationDisplay.textContent = 'Current location saved';
    locationDisplay.style.display = 'block';
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}


document.querySelector('.new-post .buttonb').onclick = () => {
    getLocation();
    document.querySelector('.new-post .buttonb').style.display = 'none';
}


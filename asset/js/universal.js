gsap.to(".loading-screen", {
    opacity: 0,
    duration: 1,
    delay: 3.5
})

const loadingScreen = document.querySelector('.loading-screen');
setTimeout(() => {
    loadingScreen.style.display = "none";
}, 4500);
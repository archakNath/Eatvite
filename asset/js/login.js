loginStatus = true;
document.querySelector('.switch-text').onclick = () => {
    const heading = document.querySelector('main .right .card .heading h1');
    const subHeading = document.querySelector('main .right .card .gray-text');
    const lowerMessage = document.querySelector('main .right .card .lower-message');
    if(loginStatus){
        heading.textContent = 'Register'
        subHeading.textContent = "Don't have an account?"
        lowerMessage.innerHTML = `Already have an account?`
        document.querySelector('.switch-text').textContent = 'Login';
    } else {
        heading.textContent = 'Login'
        subHeading.textContent = "Already have an account?"
        lowerMessage.innerHTML = `Don't have an account?`
        document.querySelector('.switch-text').textContent = 'Login';
    }
    loginStatus = !loginStatus;
}

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
document.querySelector('#continueBtn').onclick = () =>{
    if(emailInput.value == '' || passwordInput.value == ''){
        alert('fill all the fields!')
    } else {
        localStorage.setItem('username', emailInput.value);
        window.location.href = '/index.html';
    }
}
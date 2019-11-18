const usersCollection = 'usersArray';
const loggedAsCollection = 'loggedAs';

document.addEventListener('DOMContentLoaded', () => {

    // Сreate admin data for login in local
    const usersArray = localStorage.getItem(usersCollection);
    if (!usersArray) {
        let admin = [{email: 'admin@gmail.com', pass: 'root', isAdmin: true}];
        localStorage.setItem(usersCollection, JSON.stringify(admin));
    }

       // User verification
    let btnSignUp = document.querySelector('.btn-sign-up');
    btnSignUp.addEventListener('click', addUser);

    //User registration
    let btnSignIn = document.querySelector('.btn-sign-in');
    btnSignIn.addEventListener('click', verifySignIn);


});


function addUser() {
    let usersArrayLocalStorage = JSON.parse(localStorage.getItem(usersCollection)) ;
    let emailError = document.querySelector('.email-error');

    let newUser = {
        fname: document.querySelector('.input-fname-sign-up').value,
        lname: document.querySelector('.input-lname-sign-up').value,
        username: document.querySelector('.input-username-sign-up').value,
        email: document.querySelector('.input-email-sign-up').value,
        pass: document.querySelector('.input-pass-sign-up').value,
        isAdmin: false
    };
    if(usersArrayLocalStorage.find(item => item.email === newUser.email)){
        emailError.classList.remove("d-none");
    } else {
        usersArrayLocalStorage.push(newUser);
        localStorage.setItem(usersCollection, JSON.stringify(usersArrayLocalStorage));
    }
}


function verifySignIn() {
    let email = document.querySelector('.input-email-sign-in').value;
    let pass = document.querySelector('.input-pass-sign-in').value;
    let inputErrors = document.querySelector('.input-errors');

    let usersArrayLocalStorage = JSON.parse(localStorage.getItem(usersCollection));
    const user = usersArrayLocalStorage.find(item => item.email === email && item.pass === pass);
        if (user) {
            localStorage.setItem(loggedAsCollection, JSON.stringify(user));
            document.location.href = user.isAdmin ? 'AdminPanel.html' : 'UserPanel.html';
        } else {
            inputErrors.classList.remove("d-none");
        }
    }





















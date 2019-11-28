const USERS_COLLECTION = 'usersArray';
const LOGGED_COLLECTION = 'loggedAs';

document.addEventListener('DOMContentLoaded', () => {

    // Сreate admin data for login in local
    let usersArray = localStorage.getItem(USERS_COLLECTION);
    if (!usersArray) {
        let admin = [{email: 'admin@gmail.com', pass: 'root', isAdmin: true}];
        localStorage.setItem(USERS_COLLECTION, JSON.stringify(admin));
    }

    // User verification
    let btnSignUp = document.querySelector('.btn-sign-up');
    btnSignUp.addEventListener('click', addUser);

    //User registration
    let btnSignIn = document.querySelector('.btn-sign-in');
    btnSignIn.addEventListener('click', verifySignIn);


});


function addUser() {
    let usersArrayLocalStorage = JSON.parse(localStorage.getItem(USERS_COLLECTION));

    let newUser = {
        fname: document.querySelector('.input-fname-sign-up').value,
        lname: document.querySelector('.input-lname-sign-up').value,
        username: document.querySelector('.input-username-sign-up').value,
        email: document.querySelector('.input-email-sign-up').value,
        pass: document.querySelector('.input-pass-sign-up').value,
        isAdmin: false
    };
    if (usersArrayLocalStorage.find(item => item.email === newUser.email)) {
        document.querySelector('.email-error').classList.remove("d-none");
        document.querySelector('.success-sign-up').classList.add("d-none");
    } else {
        usersArrayLocalStorage.push(newUser);
        localStorage.setItem(USERS_COLLECTION, JSON.stringify(usersArrayLocalStorage));
        document.querySelector('.success-sign-up').classList.remove("d-none");
        document.querySelector('.email-error').classList.add("d-none");
    }
}


function verifySignIn() {
    let email = document.querySelector('.input-email-sign-in').value;
    let pass = document.querySelector('.input-pass-sign-in').value;
    let inputErrors = document.querySelector('.input-errors');

    let usersArrayLocalStorage = JSON.parse(localStorage.getItem(USERS_COLLECTION));
    const user = usersArrayLocalStorage.find(item => item.email === email && item.pass === pass);
    if (user) {
        localStorage.setItem(LOGGED_COLLECTION, JSON.stringify(user));
        document.location.href = user.isAdmin ? 'AdminPanel.html' : 'UserPanel.html';
    } else {
        inputErrors.classList.remove("d-none");
    }
}





















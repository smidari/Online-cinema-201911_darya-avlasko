const usersCollection = 'usersArray';
const loggedAsCollection = 'loggedAs';

document.addEventListener('DOMContentLoaded', () => {

    // Сreate admin data for login in local
    const usersArray = localStorage.getItem('usersArray');
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
    let users = JSON.parse(localStorage.getItem('usersArray')) || [];
    let newUser = {
        fname: document.querySelector('.input-fname-sign-up').value,
        lname: document.querySelector('.input-lname-sign-up').value,
        username: document.querySelector('.input-username-sign-up').value,
        email: document.querySelector('.input-email-sign-up').value,
        pass: document.querySelector('.input-pass-sign-up').value,
        isAdmin: false
    };
    users.push(newUser);
    localStorage.setItem(usersCollection, JSON.stringify(users));
}


function verifySignIn() {
    let email = document.querySelector('.input-email-sign-in').value;
    let pass = document.querySelector('.input-pass-sign-in').value;
    let error = document.querySelector('.error');

    let usersArrayLocalStorage = JSON.parse(localStorage.getItem(usersCollection));
    if (usersArrayLocalStorage) {
        const user = usersArrayLocalStorage.find(item => item.email === email && item.pass === pass);
        if (user) {
            localStorage.setItem(loggedAsCollection, JSON.stringify(user));
            document.location.href = user.isAdmin ? 'AdminPanel.html' : 'UserPanel.html';
        } else {
            error.classList.remove("d-none");
        }
    } else {
        error.classList.remove("d-none");
    }
}




















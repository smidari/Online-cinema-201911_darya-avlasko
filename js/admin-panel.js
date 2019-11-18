const loggedAsCollection = 'loggedAs';
const usersCollection = 'usersArray';

document.addEventListener('DOMContentLoaded', () => {

    //Сheck whether registered user is admin
    const loggedUser = JSON.parse(localStorage.getItem(loggedAsCollection));
    if (!loggedUser || !loggedUser.isAdmin) {
        document.location.href = 'StartPage.html';
    }
    //Button to exit the admin panel and delete registration data from localStorage
    document.querySelector('.btn-log-out').addEventListener('click', () => {
        localStorage.removeItem(loggedAsCollection);
        document.location.href = 'StartPage.html';
    });

    const usersArrayLocalStorage = JSON.parse(localStorage.getItem(usersCollection));
    fillTableUsers(usersArrayLocalStorage);
});

// Func for fill table Users from array localStorage
function fillTableUsers(user) {
    let html = '';

    user.forEach((item) => {
        html += `<tr><td>${item.fname ? item.fname : '-'}</td><td>${item.lname ? item.lname : '-'}</td>
     <td>${item.email ? item.email : '-'}</td><td>${'<button class="remove-user">&times;</button>'}</td></tr>`
    });
    document.querySelector('.body-table-users').innerHTML = html;
}



const loggedAsCollection = 'loggedAs';
const usersCollection = 'usersArray';

const usersArrayLocalStorage = JSON.parse(localStorage.getItem(usersCollection));

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


    fillTableUsers(usersArrayLocalStorage);
});

// Func for fill table Users from array localStorage
function fillTableUsers(user) {
    let html = '';

    user.forEach((item, index) => {
        html += `<tr><td>${index + 1}</td><td>${item.fname ? item.fname : '-'}</td><td>${item.lname ? item.lname : '-'}</td>
        <td>${item.email ? item.email : '-'}</td><td><button class="remove-user" onclick="deleteRow(${index})">&times;</button></td></tr>`
    });
    document.querySelector('.body-table-users').innerHTML = html;
}

function deleteRow(index) {
    usersArrayLocalStorage.splice(+index, 1);
    localStorage.removeItem(usersCollection);
    localStorage.setItem(usersCollection, JSON.stringify(usersArrayLocalStorage));
    fillTableUsers(usersArrayLocalStorage);
}
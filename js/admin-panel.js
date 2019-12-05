

document.addEventListener('DOMContentLoaded', () => {

    //Сheck whether registered user is admin
    const loggedUser = JSON.parse(localStorage.getItem(LOGGED_COLLECTION));
    if (!loggedUser || !loggedUser.isAdmin) {
        document.location.href = 'StartPage.html';
    }
    //Button to exit the admin panel and delete registration data from localStorage
    document.querySelector('.btn-log-out').addEventListener('click', () => {
        localStorage.removeItem(LOGGED_COLLECTION);
        document.location.href = 'StartPage.html';
    });
    fillTableUsers(usersArrayLocalStorage);
    fillTableFilms(films);
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
    localStorage.removeItem(USERS_COLLECTION);
    localStorage.setItem(USERS_COLLECTION, JSON.stringify(usersArrayLocalStorage));
    fillTableUsers(usersArrayLocalStorage);
}

function fillTableFilms(films) {
    let html = '';
    films.forEach((item, index) => {
        html += `<tr><td>${index + 1}</td><td>${item.title}</td><td><a href="${item.picture}">Image</a></td>
        <td>${item.descripton}</td><td>${item.price}</td><td>${item.startDate}</td><td>${item.endDate}</td><td>${item.tags}</td><td><button id="add-reserv onclick="addReserv("1")">&times;</button></td></tr>`
    });
    document.querySelector('.body-table-films').innerHTML = html;
}






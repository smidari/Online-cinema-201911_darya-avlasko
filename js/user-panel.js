document.addEventListener('DOMContentLoaded', () => {
    const loggedUser = JSON.parse(localStorage.getItem(LOGGED_COLLECTION));
    if (!loggedUser) {
        document.location.href = 'StartPage.html';
    }

    document.querySelector('.btn-log-out').addEventListener('click', () => {
        localStorage.removeItem(LOGGED_COLLECTION);
        document.location.href = 'StartPage.html';
    });

    fillTableFilms(films);
});

function fillTableFilms(films) {
    let html = '';
    films.forEach((item, index) => {
        html += `<tr><td>${index + 1}</td><td>${item.title}</td><td><a href="${item.picture}">Image</a></td>
        <td>${item.descripton}</td><td>${item.price}</td><td>${item.startDate}</td><td>${item.endDate}</td><td>${item.tags}</td><td><button class="add-reserve" onclick="addReserve(${index})">&#10004;</button></td></tr>`
    });
    document.querySelector('.body-table-films').innerHTML = html;
}

function addReserve(index) {
    let html = '';
    html += `<tr><td>${index + 1}</td><td>${films[index].title}</td><td><a href="${films[index].picture}">Image</a></td>
        <td>${films[index].descripton}</td><td>${films[index].price}</td><td>${films[index].startDate}</td><td>${films[index].endDate}</td><td>${films[index].tags}</td><td><button onclick="removeTicket(${index})">&#10004;</button></td></tr>`;

    document.querySelector('.body-table-tickets').innerHTML = html;
}

function removeTicket(index) {
    console.log(index);
}
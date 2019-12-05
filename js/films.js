

document.addEventListener('DOMContentLoaded', () => {
       // let btnReserv = document.getElementById('add-reserv').addEventListener('click', addReserv);
    fillTableFilms(films);

});

function fillTableFilms(films) {
    let html = '';
    films.forEach((item, index) => {
        html += `<tr><td>${index + 1}</td><td>${item.title}</td><td><a href="${item.picture}">Image</a></td>
        <td>${item.descripton}</td><td>${item.price}</td><td>${item.startDate}</td><td>${item.endDate}</td><td>${item.tags}</td><td><button id="add-reserv onclick="addReserv("1")">&times;</button></td></tr>`
    });
    document.querySelector('.body-table-films').innerHTML = html;
}
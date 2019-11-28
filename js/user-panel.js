const LOGGED_COLLECTION = 'loggedAs';

document.addEventListener('DOMContentLoaded', () => {
    const loggedUser = JSON.parse(localStorage.getItem(LOGGED_COLLECTION ));
    if (!loggedUser) {
        document.location.href = 'StartPage.html';
    }

    document.querySelector('.btn-log-out').addEventListener('click', () => {
        localStorage.removeItem(LOGGED_COLLECTION );
        document.location.href = 'StartPage.html';
    });

});

const loggedAsCollection = 'loggedAs';

document.addEventListener('DOMContentLoaded', () => {
    const loggedUser = JSON.parse(localStorage.getItem(loggedAsCollection));
    if (!loggedUser || !loggedUser.isAdmin) {
        document.location.href = 'StartPage.html';
    }

    document.querySelector('.btn-log-out').addEventListener('click', () => {
        localStorage.removeItem(loggedAsCollection);
        document.location.href = 'StartPage.html';
    });

});

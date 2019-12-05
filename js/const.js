const films = [
    {title: "FROZEN",
        picture: 'https://s4.vcdn.biz/static/f/1580073601/image.jpg/pt/r300x423',
        descripton:'Anna, Elsa, Kristoff, and Olaf travel far away from Arendelle into an enchanted forest to discover the true origin of Elsas magical powers and to save their kingdom',
        price: '5$',
        startDate: '22.12',
        endDate: '01.03',
        tags:'#1234'},
    {title: "FROZEN",
        picture: 'https://s4.vcdn.biz/static/f/1580073601/image.jpg/pt/r300x423',
        descripton:'Anna, Elsa, Kristoff, and Olaf travel far away from Arendelle into an enchanted forest to discover the true origin of Elsas magical powers and to save their kingdom',
        price: '5$',
        startDate: '22.12',
        endDate: '01.03',
        tags:'#1234'},
    {title: "FROZEN",
        picture: 'https://s4.vcdn.biz/static/f/1580073601/image.jpg/pt/r300x423',
        descripton:'Anna, Elsa, Kristoff, and Olaf travel far away from Arendelle into an enchanted forest to discover the true origin of Elsas magical powers and to save their kingdom',
        price: '5$',
        startDate: '22.12',
        endDate: '01.03',
        tags:'#1234'},
];
const USERS_COLLECTION = 'usersArray';
const LOGGED_COLLECTION = 'loggedAs';
const usersArrayLocalStorage = JSON.parse(localStorage.getItem(USERS_COLLECTION));
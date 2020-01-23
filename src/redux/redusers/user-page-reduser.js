import {RESERVE_FILM, REMOVE_RESERVE_FILM, DELETE_MY_ACCOUNT } from "../const";

const initialState = {
    tableFilmsForUsers: {
        thFilmsDataForUser: [
            {th: 'Id', scope: 'col'},
            {th: 'Title', scope: 'col'},
            {th: 'Picture', scope: 'col'},
            {th: 'Description', scope: 'col'},
            {th: 'Ticket price', scope: 'col'},
            {th: 'Start date', scope: 'col'},
            {th: 'End date', scope: 'col'},
            {th: 'Tags', scope: 'col'},
        ],
        trFilmsForUser: [
            {
                id: '1',
                title: 'Gemini Man',
                picture: 'https://images-na.ssl-images-amazon.com/images/I/81XZ3dEnELL._SX150_.jpg',
                description: 'Will Smith stars in the nonstop action thrill-ride from Academy ' +
                    'Award-winning director Ang Lee. Retired hitman (Smith) is forced on the run and ' +
                    'finds himself hunted by his ultimate adversary - a younger clone of himself.',
                price: '9$',
                start: '14:00',
                end: '17:00',
                tags: '#geminiman',
                reserve: 'reserve',
                remove: 'remove',
            },
            {
                id: '2',
                title: 'Ad Astra',
                picture: 'https://images-na.ssl-images-amazon.com/images/I/81NjplquRbL._SX150_.jpg',
                description: 'Astronaut Roy McBride (Brad Pitt) travels to the outer edges of the solar system to ' +
                    'find his missing father and unravel a mystery that threatens the survival of our planet.',
                price: '7$',
                start: '18:00',
                end: '19:00',
                tags: '#astra',
                reserve: 'reserve',
                remove: 'remove',
            },
            {
                id: '3',
                title: 'Joker',
                picture: 'https://images-na.ssl-images-amazon.com/images/I/91lnpx4HLoL._SX150_.jpg',
                description: '“Joker” is an original, standalone story. Arthur Fleck (Joaquin Phoenix), a man' +
                    ' disregarded by society, is not only a gritty character study, but also a broader cautionary tale.',
                price: '9$',
                start: '20:00',
                end: '22:00',
                tags: '#joker',
                reserve: 'reserve',
                remove: 'remove',
            }, {
                id: '4',
                title: 'IT Chapter Two',
                picture: 'https://images-na.ssl-images-amazon.com/images/I/81piK9f7bcL._SX150_.jpg',
                description: 'Because every 27 years evil revisits the town of Derry, Maine, “IT Chapter Two” brings ' +
                    'the characters back together as adults, nearly three decades after the events of the first film.',
                price: '10$',
                start: '15:00',
                end: '16:00',
                tags: '#itchaptertwo',
                reserve: 'reserve',
                remove: 'remove',
            },
            {
                id: '5',
                title: 'The Dark Knight',
                picture: 'https://images-na.ssl-images-amazon.com/images/I/91zBlQ1iqoL._SX150_.jpg',
                description: 'The Dark Knight reunites Christian Bale with director Christopher Nolan and ' +
                    'takes Batman across the world in his quest to fight a growing criminal threat known as The Joker .',
                price: '6$',
                start: '23:00',
                end: '01:00',
                tags: '#thedarkknight',
                reserve: 'reserve',
                remove: 'remove',
            },


        ],
    },
    reservationFilms: [],
    deleteAccount: false,
};

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESERVE_FILM: {
            const newState = {...state};
            const films = [...state.tableFilmsForUsers.trFilmsForUser];
            const reserFilm = [...state.reservationFilms];
            const film = films.find(item => item.id === action.id);
            reserFilm.push(film);
            newState.reservationFilms = reserFilm;
            return newState;
        }
        case REMOVE_RESERVE_FILM: {
            const newState = {...state};
            const trfilms = [...state.reservationFilms];
            newState.reservationFilms = trfilms.filter(item => item.id !== action.id);
            return newState;
        }
        case DELETE_MY_ACCOUNT: {
            // const newState = {...state};
            // newState.deleteAccount = true;
            // return newState;
            console.log('delete');
            return state;
        }
        default:
            return state;
    }
    };


export default userPageReducer;


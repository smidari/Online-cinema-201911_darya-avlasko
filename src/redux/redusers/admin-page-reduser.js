const DELETE_USER = 'DELETE-USER';
const ADD_FILM = 'ADD_FILM';
const DELETE_FILM = 'DELETE_FILM';

const initialState = {
    tableUsers: {
        thUsesrData: [
            {th: 'Id', scope: 'col'},
            {th: 'First name', scope: 'col'},
            {th: 'Last name', scope: 'col'},
            {th: 'Email', scope: 'col'},
            {th: 'Remove request', scope: 'col'},
        ],
        trUsers: [
            {
                id: '0',
                fname: 'Daria',
                lname: 'Smirnova',
                email: 'sda@gamail.com',
                remove: 'remove',
            },
            {
                id: '1',
                fname: 'Ivan',
                lname: 'Ivanov',
                email: 'vanivanov@gamail.com',
                remove: 'remove',
            },
            {
                id: '2',
                fname: 'Kirill',
                lname: 'Petrov',
                email: 'petrov@gamail.com',
                remove: 'remove',
            },
            {
                id: '3',
                fname: 'Ivan',
                lname: 'Ivanov',
                email: 'vanivanov@gamail.com',
                remove: 'remove',
            },
            {
                id: '4',
                fname: 'Kirill',
                lname: 'Petrov',
                email: 'petrov@gamail.com',
                remove: 'remove',
            },
            {
                id: '5',
                fname: 'Ivan',
                lname: 'Ivanov',
                email: 'vanivanov@gamail.com',
                remove: 'remove',
            },
            {
                id: '6',
                fname: 'Kirill',
                lname: 'Petrov',
                email: 'petrov@gamail.com',
                remove: 'remove',
            },
        ],
    },
    tableFilms: {
        thFilmsData: [
            {th: 'Id', scope: 'col'},
            {th: 'Title', scope: 'col'},
            {th: 'Picture', scope: 'col'},
            {th: 'Description', scope: 'col'},
            {th: 'Ticket price', scope: 'col'},
            {th: 'Start date', scope: 'col'},
            {th: 'End date', scope: 'col'},
            {th: 'Tags', scope: 'col'},
        ],
        trFilms: [
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
                remove: 'remove',
                reserve: 'reserve',
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
                remove: 'remove',
                reserve: 'reserve',
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
                remove: 'remove',
                reserve: 'reserve',
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
                remove: 'remove',
                reserve: 'reserve',
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
                remove: 'remove',
                reserve: 'reserve',
            },


        ],
    },
};

const adminPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_USER: {
          const {trUsers} = state.tableUsers;
          const users = trUsers.filter(item => item.id !== action.id);
          const newState = {...state};
          newState.tableUsers.trUsers = users;
          return newState;
        }
            case ADD_FILM: {
            const newState = {...state};
            const films = [...state.tableFilms.trFilms];
            films.push(action.newFilm);
            newState.tableFilms.trFilms = films;
            return newState;
        }
        case DELETE_FILM:{
            const {trFilms} = state.tableFilms;
            const films = trFilms.filter(item => item.id !== action.id);
            const newState = {...state};
            newState.tableFilms.trFilms = films;
            return newState;
        }
         default:
            return state;
    }
};

export const deleteUserActionCreator = id => {
    return {
        type: DELETE_USER,
        id,
    };
};

export const addFilmActionCreator = newFilm => {
    return {
      type: ADD_FILM,
      newFilm,
    };
};

export const deleteFilmActionCreator = id => {
    return {
        type: DELETE_FILM,
        id,
    }
};

export default adminPageReducer;


import { RESERVE_FILM, REMOVE_RESERVE_FILM, DELETE_MY_ACCOUNT } from '../const';

const initialState = {
  tableFilmsForUsers: {
    thFilmsDataForUser: [
      { th: 'Id', scope: 'col' },
      { th: 'Title', scope: 'col' },
      { th: 'Picture', scope: 'col' },
      { th: 'Description', scope: 'col' },
      { th: 'Ticket price', scope: 'col' },
      { th: 'Start date', scope: 'col' },
      { th: 'End date', scope: 'col' },
      { th: 'Tags', scope: 'col' },
    ],

  },
  reservationFilms: [],
  deleteAccount: false,
};

const userPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_FILM: {
      const newState = { ...state };
      const films = [...state.tableFilmsForUsers.trFilmsForUser];
      const reserFilm = [...state.reservationFilms];
      const film = films.find((item) => item.id === action.payload);
      reserFilm.push(film);
      newState.reservationFilms = reserFilm;
      return newState;
    }
    case REMOVE_RESERVE_FILM: {
      const newState = { ...state };
      const trfilms = [...state.reservationFilms];
      newState.reservationFilms = trfilms.filter((item) => item.id !== action.payload);
      return newState;
    }
    case DELETE_MY_ACCOUNT: {
      return state;
    }
    default:
      return state;
  }
};

export default userPageReducer;

import {
  ADD_FILM, DELETE_FILM, REMOVE_RESERVE_FILM, RESERVE_FILM, SET_FILMS, TOGGLE_IS_FETCHING_FILMS,
} from '../const';


const initialState = {
  tableFilms: {
    thFilmsData: [
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
  films: [],
  reservationFilms: [],
  isFetching: false,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING_FILMS: {
      return { ...state, isFetching: action.payload };
    }
    case SET_FILMS: {
      return { ...state, films: [...action.payload] };
    }
    case ADD_FILM: {
      const newState = { ...state };
      const films = [...state.films];
      films.push(action.payload);
      newState.films = films;
      return newState;
    }
    case DELETE_FILM: {
      const newFilms = state.films.filter((item) => item.id !== action.payload);
      const newState = { ...state };
      newState.films = newFilms;
      return newState;
    }
    case RESERVE_FILM: {
      const newState = { ...state };
      const films = [...state.films];
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
    default:
      return state;
  }
};

export default filmsReducer;

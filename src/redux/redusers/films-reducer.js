import { handleActions } from "redux-actions";
import {addFilm, deleteFilm, removeReserveFilm, reserveFilm, setFilms, toggleIsFetchingFilms} from "../actions/films";

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
  stateModal: {
    value: '',
    title: '',
    description: '',
    price: '',
    start: '',
    end: '',
    tags: '',
    remove: 'remove',
  },
  films: [],
  reservationFilms: [],
  isFetching: false,
};
const filmsReducer = handleActions({
  [setFilms]: (state, action) =>({ ...state, films: action.payload }),
  [toggleIsFetchingFilms]: (state, action) => ({ ...state, isFetching: action.payload }),
  [addFilm]:(state, action) =>([...state.films.push(action.payload)]),
  [deleteFilm]: (state, action) =>({ ...state, films: state.films.filter((item) => item.Id !== action.payload)}),
  [reserveFilm]: (state, action) => ({ ...state, reservationFilms: action.payload }),
  [removeReserveFilm]: (state, action) =>({ ...state, reservationFilms: state.reservationFilms.filter((item) => item.Id !== action.payload)})
}, initialState);
//
// const filmsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_FILM: {
//       const newState = { ...state };
//       const films = [...state.films];
//       films.push(action.payload);
//       newState.films = films;
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

export default filmsReducer;

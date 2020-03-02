import { handleActions } from "redux-actions";
import {
  addFilm,
  deleteFilm,
  removeReserveFilm,
  reserveFilm,
  setFilms,
  toggleIsFetchingFilms
} from "../actions/films";

const initialState = {
  stateModal: {
    Title: "",
    Description: "",
    "Ticket price": "",
    "Start date": "",
    "End date": "",
    Tags: ""
  },
  films: [],
  reservationFilms: [],
  isFetching: false
};
const filmsReducer = handleActions(
  {
    [setFilms]: (state, action) => ({ ...state, films: action.payload }),
    [toggleIsFetchingFilms]: (state, action) => ({
      ...state,
      isFetching: action.payload
    }),
    [addFilm]: (state, action) => {
      const newFilms = { ...action.payload };
      newFilms.Id = state.films.length + 1;
      return {
        ...state,
        films: [...state.films, newFilms]
      };
    },
    [deleteFilm]: (state, action) => {
      return {
        ...state,
        films: state.films.filter(item => item.Id !== action.payload)
      };
    },
    [reserveFilm]: (state, action) => {
      const newState = { ...state };
      // eslint-disable-next-line no-unused-expressions
      state.reservationFilms.find(item => item.Id === action.payload.Id)
        ? (newState.reservationFilms = [...state.reservationFilms])
        : (newState.reservationFilms = [
            ...state.reservationFilms,
            action.payload
          ]);
      return newState;
    },
    [removeReserveFilm]: (state, action) => ({
      ...state,
      reservationFilms: state.reservationFilms.filter(
        item => item.Id !== action.payload
      )
    })
  },
  initialState
);
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

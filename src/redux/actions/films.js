import { createActions } from "redux-actions";

export const {
  setFilms,
  toggleIsFetchingFilms,
  addFilm,
  deleteFilm,
  reserveFilm,
  removeReserveFilm
} = createActions({
  SET_FILMS: films => films,
  TOGGLE_IS_FETCHING_FILMS: isFetching => isFetching,
  ADD_FILM: newFilm => newFilm,
  DELETE_FILM: id => id,
  RESERVE_FILM: id => id,
  REMOVE_RESERVE_FILM: id => id
});

export const getFilms = () => dispatch => {
  dispatch(toggleIsFetchingFilms(true));
  setTimeout(() => {
    fetch("http://localhost:3000/server/films.json")
      .then(response => response.json())
      .then(data => {
        dispatch(toggleIsFetchingFilms(false));
        dispatch(setFilms(data.films));
      });
  }, 1000);
};

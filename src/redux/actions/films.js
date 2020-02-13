import {
  ADD_FILM, DELETE_FILM, REMOVE_RESERVE_FILM, RESERVE_FILM, SET_FILMS, TOGGLE_IS_FETCHING_FILMS,
} from '../const';

export const setFilms = (films) => ({
  type: SET_FILMS,
  payload: films,
});

export const toggleIsFetchingFilms = (isFetching) => ({
  type: TOGGLE_IS_FETCHING_FILMS,
  payload: isFetching,
});

export const getFilms = () => (dispatch) => {
  dispatch(toggleIsFetchingFilms(true));
  setTimeout(() => {
    fetch('http://localhost:3000/server/films.json')
      .then((response) => response.json())
      .then(
        (data) => {
          dispatch(toggleIsFetchingFilms(false));
          dispatch(setFilms(data.films));
        },
      );
  }, 1000);
};

export const addFilm = (newFilm) => ({
  type: ADD_FILM,
  payload: newFilm,
});

export const deleteFilm = (id) => ({
  type: DELETE_FILM,
  payload: id,
});

export const reserveFilm = (id) => ({
  type: RESERVE_FILM,
  payload: id,
});

export const removeReserveFilm = (id) => ({
  type: REMOVE_RESERVE_FILM,
  payload: id,
});

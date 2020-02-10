
import { createActions } from 'redux-actions';

export const { reserveFilm, removeReserveFilm, deleteMyAccount } = createActions({
  RESERVE_FILM: (id) => id,
  REMOVE_RESERVE_FILM: (id) => id,
});

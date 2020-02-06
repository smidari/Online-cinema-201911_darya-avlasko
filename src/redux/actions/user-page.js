import {RESERVE_FILM, REMOVE_RESERVE_FILM, DELETE_MY_ACCOUNT } from "../const";

export const reserveFilm = id =>({
        type: RESERVE_FILM,
        payload: id,
});

export const removeReserveFilm = id => ({
           type: REMOVE_RESERVE_FILM,
           payload: id,
});

export const deleteMyAccount = () => ({
           type: DELETE_MY_ACCOUNT,
});
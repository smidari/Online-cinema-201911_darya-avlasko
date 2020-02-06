import {ADD_FILM, DELETE_FILM } from "../const";

export const addFilm = newFilm => ({
        type: ADD_FILM,
        payload: newFilm,
    }
);

export const deleteFilm = id => ({
        type: DELETE_FILM,
        payload: id,
    }
);
import {ADD_FILM, DELETE_FILM, DELETE_USER} from "../const";

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
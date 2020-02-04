import {RESERVE_FILM, REMOVE_RESERVE_FILM, DELETE_MY_ACCOUNT } from "../const";

export const reserveFilmActionCreator = id => {
    return {
        type: RESERVE_FILM,
        id,
    };
};

export const removeReserveFilmActionCreator = id => {
    return {
        type: REMOVE_RESERVE_FILM,
        id,
    }
};

export const deleteMyAccountActionCreator = () => {
    return {
        type: DELETE_MY_ACCOUNT,
    }
};
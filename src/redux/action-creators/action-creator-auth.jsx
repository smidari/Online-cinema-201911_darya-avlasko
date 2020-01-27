import {SET_USER_DATA, VEREFICATION_USER} from "../const";

export const setAuthUserData = userAuthData => {
    return {
        type:  SET_USER_DATA,
        userAuthData,
    }
};

export const verificationUser = user => {
    return {
        type: VEREFICATION_USER,
        user,
    }
};
import {DELETE_USER, LOG_OUT, SET_USERS, VEREFICATION_USER} from "../const";

export  const setUsers = users =>{
    return {
        type: SET_USERS,
        payload: users,
    };
};

export const getUsers = () => {
    return dispatch => {
        fetch('http://localhost:3000/server/users.json')
            .then(response => response.json())
            .then(data => dispatch(setUsers(data.users)));
    }
};

export const verificationUser = user => ({
    type: VEREFICATION_USER,
    payload: user,
});

export const deleteUser = userId => {
    return {
        type: DELETE_USER,
        payload: userId,
    };
};

export const logout = () => ({
    type: LOG_OUT,
});
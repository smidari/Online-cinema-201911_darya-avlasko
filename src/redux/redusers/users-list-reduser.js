import {DELETE_USER, SET_USERS} from "../const";


const initialState = {
    thUsesrData: [
        {th: 'Id', scope: 'col'},
        {th: 'First name', scope: 'col'},
        {th: 'Last name', scope: 'col'},
        {th: 'Email', scope: 'col'},
        {th: 'Remove request', scope: 'col'},
    ],
    users: [ ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_USER: {
            const newUsers = state.users.filter(item => item.id !== action.payload);
            const newState = {...state};
            newState.users = newUsers;
            return newState;
            }
        case SET_USERS: {
            return {...state, users: [...action.payload]}
        }
        default:
            return state;
    }
};

export const deleteUser = userId => {
    return {
        type: DELETE_USER,
        payload: userId,
    };
};
export  const setUsers = users =>{
    return {
        type: SET_USERS,
        payload: users,
    };
};

export const getUsers = () => {
    return dispatch => {
            fetch('http://localhost:3000/api/users.json')
                .then(response => response.json())
                .then(data => dispatch(setUsers(data.users)));
    }
};

export default usersReducer;


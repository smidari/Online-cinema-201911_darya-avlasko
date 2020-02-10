import { createAction } from 'redux-actions';
import {
  DELETE_USER, SET_USERS, TOGGLE_IS_FETCHING, VEREFICATION_USER,
} from '../const';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

// export const {setUsers, deleteUser} = createActions({
//     SET_USERS: users => users,
//     DELETE_USER: userId => userId,
// });

export const verificationUser = (user) => ({
  type: VEREFICATION_USER,
  payload: user,
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});

export const logout = createAction('LOG_OUT');

export const getUsers = () => (dispatch) => {
  dispatch(toggleIsFetching(true));
  fetch('http://localhost:3000/server/users.json')
    .then((response) => response.json())
    .then(dispatch(toggleIsFetching(false)))
    .then((data) => dispatch(setUsers(data.users)));
};

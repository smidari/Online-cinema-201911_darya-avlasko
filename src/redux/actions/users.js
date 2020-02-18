import { createAction } from 'redux-actions';
import {
  DELETE_USER, SET_USERS, TOGGLE_IS_FETCHING, VEREFICATION_USER,
} from '../const';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

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
  setTimeout(() => {
    fetch('http://localhost:3000/server/myusers.json')
      .then((response) => response.json())
      .then(
        (data) => {
          dispatch(toggleIsFetching(false));
          dispatch(setUsers(data.users));
        },
      );
  }, 1000);
};

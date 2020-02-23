import { createActions } from "redux-actions";

export const {
  setUsers,
  toggleIsFetching,
  verificationUser,
  deleteUser,
  logout
} = createActions({
  SET_USERS: users => users,
  TOGGLE_IS_FETCHING: isFetching => isFetching,
  VEREFICATION_USER: user => user,
  DELETE_USER: id => id,
  RESERVE_FILM: id => id,
  REMOVE_RESERVE_FILM: id => id
});

export const getUsers = () => dispatch => {
  dispatch(toggleIsFetching(true));
  setTimeout(() => {
    fetch("http://localhost:3000/server/users.json")
      .then(response => response.json())
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.users));
      });
  }, 1000);
};

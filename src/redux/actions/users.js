import { createActions } from "redux-actions";

export const {
  setUsers,
  toggleIsFetching,
  deleteUser,
  changeDataUser,
  deleteAccount,
  userVerification,
  logout
} = createActions({
  SET_USERS: users => users,
  TOGGLE_IS_FETCHING: isFetching => isFetching,
  DELETE_USER: id => id,
  CHANGE_DATA_USER: data => data,
  DELETE_ACCOUNT: user => user,
  USER_VERIFICATION: user => user,
  LOGOUT: () => {}
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

import { handleActions } from "redux-actions";
import {
  setUsers,
  toggleIsFetching,
  deleteUser,
  changeDataUser,
  deleteAccount,
  userVerification,
  logout
} from "../actions/users";

const initialState = {
  users: [],
  userVerified: {},
  usersForDelete: [],
  admin: false,
  user: false,
  isFetching: false,
  modalSignIn: {
    stateModal: {
      email: "",
      password: ""
    }
  }
};

const usersReducer = handleActions(
  {
    [setUsers]: (state, action) => ({ ...state, users: action.payload }),
    [toggleIsFetching]: (state, action) => ({
      ...state,
      isFetching: action.payload
    }),

    [deleteUser]: (state, action) => ({
      ...state,
      users: state.users.filter(item => item.id !== action.payload)
    }),
    [logout]: state => ({ ...state, userVerified: {} }),
    [changeDataUser]: state => ({ ...state }),
    [deleteAccount]: (state, action) => ({
      ...state,
      usersForDelete: [...state.usersForDelete, action.payload]
    }),
    [userVerification]: (state, action) => {
      const user = state.users.find(
        item =>
          item.Email === action.payload.email &&
          item.Password === action.payload.password
      );
      const newState = { ...state };
      // eslint-disable-next-line no-unused-expressions
      user ? (newState.userVerified = user) : (newState.userVerified = {});
      return newState;
    }
  },
  initialState
);

export default usersReducer;

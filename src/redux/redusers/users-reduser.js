import { handleActions } from "redux-actions";
import {
  deleteUser,
  logout,
  setUsers,
  toggleIsFetching,
  verificationUser
} from "../actions/users";

const initialState = {
  users: [],
  userVerified: {},
  usersForDelete: [],
  removalRequestsFromUsers: [],
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
    [verificationUser]: (state, action) => ({
      ...state,
      userVerified: state.users.find(
        item =>
          item.Email === action.payload.email &&
          item.Password === action.payload.password
      )
    }),
    // state.userVerified.isAdmin ? (state.admin = true) : (state.user = true)
    [deleteUser]: (state, action) => ({
      ...state,
      users: state.users.filter(item => item.id !== action.payload)
    }),
    [logout]: state => ({ ...state, admin: false, user: false })
  },
  initialState
);

export default usersReducer;

//     case VEREFICATION_USER: {
//       const newState = { ...state };
//       const user = state.users.find(
//         item =>
//           item.Email === action.payload.email &&
//           item.Password === action.payload.password
//       );
//       if (user.isAdmin === true) {
//         newState.admin = true;
//       } else if (user.isAdmin === false) {
//         newState.user = true;
//       }
//       return newState;
//     }

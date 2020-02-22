import { handleActions } from "redux-actions";
import {
  deleteUser,
  logout,
  setUsers,
  toggleIsFetching
} from "../actions/users";
// import {
//   DELETE_USER,
//   LOG_OUT,
//   SET_USERS,
//   TOGGLE_IS_FETCHING,
//   VEREFICATION_USER
// } from "../const";

const initialState = {
  users: [],
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

// const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_IS_FETCHING: {
//       return { ...state, isFetching: action.payload };
//     }
//     case SET_USERS: {
//       return { ...state, users: [...action.payload] };
//     }
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
//     case LOG_OUT: {
//       const newState = { ...state };
//       newState.admin = false;
//       newState.user = false;
//       return newState;
//     }
//     case DELETE_USER: {
//       return {
//         ...state,
//         users: state.users.filter(item => item.Id !== action.payload)
//       };
//     }
//     default:
//       return state;
//   }
// };

const usersReducer = handleActions(
  {
    [setUsers]: (state, action) => ({ ...state, users: action.payload }),
    [toggleIsFetching]: (state, action) => ({
      ...state,
      isFetching: action.payload
    }),
    // [verificationUser]: (state, action) =>({}),
    [deleteUser]: (state, action) => ({
      ...state,
      films: state.user.filter(item => item.Id !== action.payload)
    }),
    [logout]: state => ({ ...state, admin: false, user: false })
  },
  initialState
);

export default usersReducer;

import {
  DELETE_USER, LOG_OUT, SET_USERS, TOGGLE_IS_FETCHING, VEREFICATION_USER,
} from '../const';

const initialState = {
  thUsesrData: [
    { th: 'Id', scope: 'col' },
    { th: 'First name', scope: 'col' },
    { th: 'Last name', scope: 'col' },
    { th: 'Email', scope: 'col' },
    { th: 'Remove request', scope: 'col' },
  ],
  users: [],
  admin: false,
  user: false,
  isFetching: false,
  modalSignIn: {
    stateModal: {
      email: '',
      password: '',
    },
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING: {
      console.log('preloader');
      return { ...state, isFetching: action.payload };
    }
    case SET_USERS: {
      return { ...state, users: [...action.payload] };
    }
    case VEREFICATION_USER: {
      const newState = { ...state };
      const user = state.users.find(
        (item) => item.email === action.payload.email
                    && item.password === action.payload.password,
      );
      if (user.isAdmin === true) {
        newState.admin = true;
      } else if (user.isAdmin === false) {
        newState.user = true;
      }
      return newState;
    }
    case LOG_OUT: {
      const newState = { ...state };
      newState.admin = false;
      newState.user = false;
      return newState;
    }
    case DELETE_USER: {
      const newUsers = state.users.filter((item) => item.id !== action.payload);
      const newState = { ...state };
      newState.users = newUsers;
      return newState;
    }
    default:
      return state;
  }
};

export default usersReducer;

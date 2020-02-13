import { DELETE_MY_ACCOUNT } from '../const';

const initialState = {
  reservationFilms: [],
  deleteAccount: false,
};

const userPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MY_ACCOUNT: {
      return state;
    }
    default:
      return state;
  }
};

export default userPageReducer;

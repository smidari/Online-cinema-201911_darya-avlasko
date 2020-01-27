import {ADD_USER} from "../const";

const initialState = {
  dataNav: [
    { href: '/admin/films', name: 'Admin' },
    { href: '/user', name: 'User' },
  ],
  formData: {
    signUp: {
      fname: '',
      lname: '',
      username: '',
      email: '',
      password: '',
    },
  data: ['fname', 'lname', 'username', 'email', 'password' ],
  },


};

const homeReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return state;
    }
    default:
      return state;
  }
};

export const addUserActionCreator = user => {
  return {
    type: ADD_USER,
    user,
  }
};

export default homeReduser;


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
    data: ['fname', 'lname', 'username', 'email', 'password'],
  },
};

const homeReduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default homeReduser;

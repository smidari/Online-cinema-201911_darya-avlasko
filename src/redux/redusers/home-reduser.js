const initialState = {
  dataNav: [
    { href: '/admin/films', name: 'Admin' },
    { href: '/user', name: 'User' },
  ],
};

const homeReduser = (state = initialState, action) => state;

export default homeReduser;
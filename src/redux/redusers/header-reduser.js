const initialState = {
  dataNavAdmin: [
    { href: '/admin/films', name: 'Films' },
    { href: '/admin/users', name: 'Users' },
  ],
  dataNavUser: [
    // { href: '/user/myaccount', name: 'My Account' },
    { href: '/user/films', name: 'Films' },
    { href: '/user/reservation', name: 'Reservation' },
  ],
};
const headerReduser = (state = initialState, action) => state;

export default headerReduser;

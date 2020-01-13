let initialState = {
    dataNavAdmin: [
        {href: '/admin/films', name: 'Films'},
        {href: '/admin/users', name: 'Users'},
    ],
};
const headerReduser = (state = initialState, action) => state;

export default headerReduser;


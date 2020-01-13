let initialState = {
    dataNav: [
        { href: '/admin', name: 'Admin' },
        { href: '/user', name: 'User' },
    ],
};

const homeReduser = (state = initialState, action) => state;

export default homeReduser;


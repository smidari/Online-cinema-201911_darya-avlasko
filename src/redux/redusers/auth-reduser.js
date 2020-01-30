import {  VEREFICATION_USER } from "../const";

export const USERS_COLLECTION = 'usersArray';
export const usersArrayLocalStorage = JSON.parse(localStorage.getItem(USERS_COLLECTION));

const initialState = {
    email: null,
    pass: null,
    modalSignIn: {
        stateModal: {
            email: '',
            password: '',
        },
    },
   };

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case VEREFICATION_USER: {
            const user = usersArrayLocalStorage.find(
                item => item.email === action.user.email && item.password === action.user.pass
            );
            if(user){
                localStorage.setItem('authToken', JSON.stringify('admin'));
            }
            return state;
        }
        default:
            return state;
    }
};

export default authReduser;

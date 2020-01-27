import {AUTH_DATA} from "../store";
import { SET_USER_DATA, VEREFICATION_USER } from "../const";




export const USERS_COLLECTION = 'usersArray';
export const usersArrayLocalStorage = JSON.parse(localStorage.getItem(USERS_COLLECTION));



const initialState = {
    email: null,
    pass: null,
    isAuth: false,
   };

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userAuthData,
                isAuth: true,
            }
        }
        case VEREFICATION_USER: {

            const user = usersArrayLocalStorage.find(
                item => item.email === action.user.email && item.pass === action.user.pass
            );
            if(user){
                let authDataLocalStorage = JSON.parse(localStorage.getItem(AUTH_DATA));
                authDataLocalStorage = action.user;
                localStorage.setItem(AUTH_DATA, JSON.stringify(authDataLocalStorage));
            }

            return state;
        }
        default:
            return state;
    }
};


export default authReduser;

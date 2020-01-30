import {AUTH_DATA} from "../store";
import { SET_USER_DATA, VEREFICATION_USER } from "../const";

export const USERS_COLLECTION = 'usersArray';
export const usersArrayLocalStorage = JSON.parse(localStorage.getItem(USERS_COLLECTION));

const initialState = {
    email: null,
    pass: null,
    isAuth: false,
    modalSignIn: {
        stateModal: {
            email: '',
            password: '',
        },
    }
   };

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        // case SET_USER_DATA: {
        //     return {
        //         ...state,
        //         ...action.userAuthData,
        //         isAuth: true,
        //     }
        // }
        case VEREFICATION_USER: {
            const newState = {...state};
            const user = usersArrayLocalStorage.find(
                item => item.email === action.user.email && item.password === action.user.pass
            );
            if(user){
                let authDataLocalStorage = JSON.parse(localStorage.getItem(AUTH_DATA));
                authDataLocalStorage = action.user;
                localStorage.setItem(AUTH_DATA, JSON.stringify(authDataLocalStorage));

                    newState.isAuth = true
            } else {
                console.log(usersArrayLocalStorage)
            }

            return newState;
        }
        default:
            return state;
    }
};


export default authReduser;

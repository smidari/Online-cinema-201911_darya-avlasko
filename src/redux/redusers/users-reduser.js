import {
    DELETE_USER, LOG_OUT, SET_USERS, TOGGLE_IS_FETCHING, VEREFICATION_USER,
} from '../const';
import {handleActions} from "redux-actions";

const initialState = {
    users: [],
    removalRequestsFromUsers: [],
    admin: false,
    user: false,
    isFetching: false,
    modalSignIn: {
        stateModal: {
            email: '',
            password: '',
        },
    },
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.payload };
        }
        case SET_USERS: {
            return { ...state, users: [...action.payload] };
        }
        case VEREFICATION_USER: {
            console.log( action.payload);
            console.log( state.users );
            const newState = { ...state };
            const user = state.users.find(
                (item) => item.email === action.payload.Email
                    && item.password === action.payload.Password,
            );
            if (!user) {
                alert('There was a problem. We cannot find this account!');
            } else if (user.isAdmin === true) {
                newState.admin = true;
            } else if (user.isAdmin === false) {
                newState.user = true;
            }
            return newState;
        }
        case LOG_OUT: {
            const newState = { ...state };
            newState.admin = false;
            newState.user = false;
            return newState;
        }
        case DELETE_USER: {
            return { ...state, users: state.users.filter((item) => item.Id !== action.payload)}
        }
        default:
            return state;
    }
};

export default usersReducer;

// const usersReducer = handleActions({
//     [setUsers]: (state, action) =>({...state, users: action.payload }),
//     [toggleIsFetching]: (state, action) => ({ ...state, isFetching: action.payload }),
//     [verificationUser]:(state, action) =>({}),
//     [deleteUser]: (state, action) =>([...state.users.filter((item) => item.id !== action.payload]),
//     [logout]:(state, action) =>({ ...state, admin: false, user: false }),
//     initialState
// });
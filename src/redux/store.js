import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import  thunkMiddleware  from 'redux-thunk';
import adminPageReducer from './redusers/admin-page-reduser';
import homeReduser from './redusers/home-reduser';
import userPageReducer from "./redusers/user-page-reduser";
import authReduser from "./redusers/auth-reduser";
import usersReducer from "./redusers/users-list-reduser";


export const USERS_COLLECTION = 'usersArray';
export const usersArrayLocalStorage = JSON.parse(localStorage.getItem(USERS_COLLECTION));
let usersArray = localStorage.getItem(USERS_COLLECTION);

if (!usersArray) {
  let admin = [{email: 'admin', pass: 'root', userId: 'admin'}];
  localStorage.setItem(USERS_COLLECTION, JSON.stringify(admin));}



const reducers = combineReducers({
  adminPage: adminPageReducer,
  adminUsersPage: usersReducer,
  userPage: userPageReducer,
  home: homeReduser,
  auth: authReduser,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunkMiddleware ))
);

export default store;

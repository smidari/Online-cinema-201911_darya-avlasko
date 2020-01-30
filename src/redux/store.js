import { combineReducers, createStore } from 'redux';
import { reducer as modalProvider } from 'react-redux-modal-provider';
import adminPageReducer from './redusers/admin-page-reduser';
import homeReduser from './redusers/home-reduser';
import userPageReducer from "./redusers/user-page-reduser";
import authReduser from "./redusers/auth-reduser";

export const AUTH_DATA = 'authData';
export const USERS_COLLECTION = 'usersArray';
export const usersArrayLocalStorage = JSON.parse(localStorage.getItem(USERS_COLLECTION));



let usersArray = localStorage.getItem(USERS_COLLECTION);


if (!usersArray) {
  let admin = [{email: 'admin', pass: 'root', userId: 'admin'}];
  localStorage.setItem(USERS_COLLECTION, JSON.stringify(admin));

  let auth = {};
  localStorage.setItem(AUTH_DATA, JSON.stringify(auth));
}


const reducers = combineReducers({
  adminPage: adminPageReducer,
  userPage: userPageReducer,
  home: homeReduser,
  auth: authReduser,

});

const store = createStore(reducers);

export default store;

import { combineReducers, createStore } from 'redux';
import { reducer as modalProvider } from 'react-redux-modal-provider';
import adminPageReducer from './redusers/admin-page-reduser';
import homeReduser from './redusers/home-reduser';
import headerReduser from './redusers/header-reduser';
import userPageReducer from "./redusers/user-page-reduser";


const reducers = combineReducers({
  adminPage: adminPageReducer,
  userPage: userPageReducer,
  home: homeReduser,
  header: headerReduser,
  modalProvider,
});

const store = createStore(reducers);

export default store;

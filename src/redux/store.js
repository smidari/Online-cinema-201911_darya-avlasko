import { combineReducers, createStore } from 'redux';
import adminPageReducer from './redusers/admin-page-reduser';
import homeReduser from './redusers/home-reduser';
import headerReduser from './redusers/header-reduser';

const reducers = combineReducers({
  adminPage: adminPageReducer,
  home: homeReduser,
  header: headerReduser,
});

const store = createStore(reducers);

export default store;

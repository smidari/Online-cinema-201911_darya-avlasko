import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import  thunkMiddleware  from 'redux-thunk';
import adminPageReducer from './redusers/admin-page-reduser';
import homeReduser from './redusers/home-reduser';
import userPageReducer from "./redusers/user-page-reduser";
import usersReducer from "./redusers/users-reduser";
import filmsReducer from "./redusers/films-reducer";

const reducers = combineReducers({
  adminPage: adminPageReducer,
  users: usersReducer,
  films: filmsReducer,
  userPage: userPageReducer,
  home: homeReduser,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunkMiddleware ))
);

export default store;

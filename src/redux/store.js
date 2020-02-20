import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import filmsReducer from './redusers/films-reducer';
import usersReducer from "./redusers/users-reduser";

const reducers = combineReducers({
  users: usersReducer,
  films: filmsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);

export default store;

import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-bootstrap';
import { Provider } from 'react-redux';

import ListFilmsAdmin from '../pages/admin/listFilms/ListFilmsAdmin';
import ListFilmsUser from '../pages/user/films/ListFilmsUser';
import ListResrvFilmContainer from '../pages/user/reservation/ListReservFilmContainer';
import HeaderContainer from '../components/header/HeaderContainer';
import { ModalProvider } from '../components/modal/ModalContext';
import ModalRoot from '../components/modal/ModaRoot';
import store from '../redux/store';
import PrivateRoute from './PrivateRoute';
import ListDeleteUsersContainer from '../pages/admin/list-delete-user/ListDeleteUserContainer';
import Home from '../pages/home/Home';
import UsersList from '../pages/admin/users/UsersList';


const App = () => (
  <BrowserRouter>
    <ModalProvider>
      <ModalRoot />
      <Provider store={store}>
        <>
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/admin/users" component={UsersList} />
            <PrivateRoute path="/admin/films" component={ListFilmsAdmin} />
            <PrivateRoute path="/admin/deleteuser" component={ListDeleteUsersContainer} />
            <PrivateRoute path="/user/films" component={ListFilmsUser} />
            <PrivateRoute path="/user/reservation" component={ListResrvFilmContainer} />
          </Switch>
        </>
      </Provider>
    </ModalProvider>
  </BrowserRouter>
);


export default App;

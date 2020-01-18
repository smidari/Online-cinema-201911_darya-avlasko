import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ListUsersContainer from '../admin/listUsers/ListUsersContainer';
import HomeContainer from '../home/HomeContainer';
import HeaderContainer from '../ui/header/HeaderContainer';
import ListFilmsContainer from "../admin/listFilms/ListFilmsContainer";

const App = props => (
  <div>
    <Route exact path="/" render={() => <HomeContainer />} />
    <Route path="/admin" render={() => <HeaderContainer />} />
    <Route path="/admin/users" render={() => <ListUsersContainer />} />
    <Route path="/admin/films" render={() => <ListFilmsContainer />} />

  </div>
);

export default App;

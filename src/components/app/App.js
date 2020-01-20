import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ListUsersContainer from '../admin/listUsers/ListUsersContainer';
import HomeContainer from '../home/HomeContainer';
import HeaderAdminContainer from '../ui/header/HeaderAdminContainer';
import ListFilmsAdminContainer from "../admin/listFilms/ListFilmsAdminContainer";
import HeaderUserContainer from "../ui/header/HeaderUserContainer";
import ListFilmsUserContainer from "../user-page/ListFilmsUserContainer";

const App = props => (
  <div>
    <Route exact path="/" render={() => <HomeContainer />} />
    <Route path="/admin" render={() => <HeaderAdminContainer />} />
      <Route path="/user" render={() => <HeaderUserContainer />} />
    <Route path="/admin/users" render={() => <ListUsersContainer />} />
    <Route path="/admin/films" render={() => <ListFilmsAdminContainer />} />
    <Route path="/user/films" render={() => <ListFilmsUserContainer />} />

  </div>
);

export default App;

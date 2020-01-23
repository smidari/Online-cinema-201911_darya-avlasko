import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ListUsersContainer from '../admin/listUsers/ListUsersContainer';
import HomeContainer from '../home/HomeContainer';
import HeaderAdminContainer from '../ui/header/HeaderAdminContainer';
import ListFilmsAdminContainer from "../admin/listFilms/ListFilmsAdminContainer";
import HeaderUserContainer from "../ui/header/HeaderUserContainer";
import ListFilmsUserContainer from "../user-page/films/ListFilmsUserContainer";
import ListResrvFilmContainer from "../user-page/reservation/ListReservFilmContainer";
import MyAccountContainer from "../user-page/my-account/MyAccountContainer";

const App = props => (
  <div>
    <Route exact path="/" render={() => <HomeContainer />} />
    <Route path="/admin" render={() => <HeaderAdminContainer />} />
    <Route path="/user" render={() => <HeaderUserContainer />} />
    <Route path="/admin/users" render={() => <ListUsersContainer />} />
    <Route path="/admin/films" render={() => <ListFilmsAdminContainer />} />
    <Route path="/user/films" render={() => <ListFilmsUserContainer />} />
    <Route path="/user/reservation" render={() => <ListResrvFilmContainer />} />
    <Route path="/user/myaccount" render={() => <MyAccountContainer />} />


  </div>
);

export default App;

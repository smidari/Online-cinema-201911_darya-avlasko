import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {Switch} from "react-bootstrap";
import ListUsersContainer from '../admin/listUsers/ListUsersContainer';
import HomeContainer from '../home/HomeContainer';
import ListFilmsAdminContainer from "../admin/listFilms/ListFilmsAdminContainer";
import ListFilmsUserContainer from "../user-page/films/ListFilmsUserContainer";
import ListResrvFilmContainer from "../user-page/reservation/ListReservFilmContainer";
import MyAccountContainer from "../user-page/my-account/MyAccountContainer";
import HeaderContainer from "../ui/header/HeaderContainer";
import { PrivateRoute } from "./PrivateRoute";


export default class App extends Component{
     constructor(props) {
         super(props);
     }

     render(){
         return (
           <>
             <HeaderContainer />
             <Switch>
               <Route exact path="/" component={HomeContainer} />
               <PrivateRoute path="/admin/users" component={ListUsersContainer}  />
               <PrivateRoute path="/admin/films" component={ListFilmsAdminContainer}  />
               <Route path="/user/films" component={ListFilmsUserContainer} />
               <Route path="/user/reservation" component={ListResrvFilmContainer}  />
               <Route path="/user/myaccount" component={MyAccountContainer} />
             </Switch>
           </>
         )
     }
 }






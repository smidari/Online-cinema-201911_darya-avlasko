import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from "react-bootstrap";
import {Provider} from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import HomeContainer from "../pages/home/HomeContainer";
import UsersContainer from "../pages/admin/users/UsersListContainer";
import ListFilmsAdminContainer from "../pages/admin/listFilms/ListFilmsAdminContainer";
import ListFilmsUserContainer from "../pages/user/films/ListFilmsUserContainer";
import ListResrvFilmContainer from "../pages/user/reservation/ListReservFilmContainer";
import MyAccountContainer from "../pages/user/my-account/MyAccountContainer";
import HeaderContainer from "../components/header/HeaderContainer";
import {ModalProvider} from "../components/modal/ModalContext";
import ModalRoot from "../components/modal/ModaRoot";
import store from "../redux/store";

 const App = () => (
   <BrowserRouter>
     <ModalProvider>
       <ModalRoot />
       <Provider store={store}>
         <>
           <HeaderContainer />
           <Switch>
             <Route exact path="/" component={HomeContainer} />
             <PrivateRoute path="/admin/users" component={UsersContainer}  />
             <PrivateRoute path="/admin/films" component={ListFilmsAdminContainer}  />
             <Route path="/user/films" component={ListFilmsUserContainer} />
             <Route path="/user/reservation" component={ListResrvFilmContainer}  />
             <Route path="/user/myaccount" component={MyAccountContainer} />
           </Switch>
         </>
       </Provider>
     </ModalProvider>
   </BrowserRouter>
     );




export default App;


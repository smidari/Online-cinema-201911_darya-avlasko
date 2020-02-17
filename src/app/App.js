import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-bootstrap";
import { Provider } from "react-redux";
import ListResrvFilmContainer from "../pages/user/reservation/ListReservFilmContainer";
import HeaderContainer from "../components/header/HeaderContainer";
import { ModalProvider } from "../components/modal/ModalContext";
import ModalRoot from "../components/modal/ModaRoot";
import store from "../redux/store";
import PrivateRoute from "./PrivateRoute";
import ListDeleteUsersContainer from "../pages/admin/list-delete-user/ListDeleteUserContainer";
import Home from "../pages/home/Home";
import ListFilmsAdminContainer from "../pages/admin/listFilms/ListFilmsAdminContainer";
import UserListContainer from "../pages/admin/users/UsersListContainer";
import FilmsListUserContainer from "../pages/user/films/FilmsListUserContainer";

const App = () => (
  <BrowserRouter>
    <ModalProvider>
      <ModalRoot />
      <Provider store={store}>
        <>
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin/users" component={UserListContainer} />
            <Route path="/admin/films" component={ListFilmsAdminContainer} />
            <PrivateRoute path="/admin/deleteuser" component={ListDeleteUsersContainer} />
            <Route path="/user/films" component={FilmsListUserContainer} />
            <PrivateRoute path="/user/reservation" component={ListResrvFilmContainer} />
          </Switch>
        </>
      </Provider>
    </ModalProvider>
  </BrowserRouter>
);

export default App;

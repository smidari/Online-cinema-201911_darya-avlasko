import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-bootstrap";
import { Provider } from "react-redux";
import ListResrvFilmContainer from "../pages/user/reservation/ListReservFilmContainer";
import { ModalProvider } from "../components/modal/ModalContext";
import ModalRoot from "../components/modal/ModaRoot";
import store from "../redux/store";
import PrivateRoute from "./PrivateRoute";
import ListDeleteUsersContainer from "../pages/admin/list-delete-users/ListDeleteUserContainer";
import Home from "../pages/home/Home";
import FilmsForAdminContainer from "../pages/admin/films/FilmsForAdminContainer";
import UserListContainer from "../pages/admin/users/UsersContainer";
import FilmsForUserContainer from "../pages/user/films/FilmsForUserContainer";
import HeaderContainer from "../components/header/HeaderContainer";

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
            <Route path="/admin/films" component={FilmsForAdminContainer} />
            <PrivateRoute
              path="/admin/deleteuser"
              component={ListDeleteUsersContainer}
            />
            <Route path="/user/films" component={FilmsForUserContainer} />
            <Route
              path="/user/reservation"
              component={ListResrvFilmContainer}
            />
          </Switch>
        </>
      </Provider>
    </ModalProvider>
  </BrowserRouter>
);

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-bootstrap";
import { Provider } from "react-redux";
import { ModalProvider } from "../components/modal/ModalContext";
import ModalRoot from "../components/modal/ModaRoot";
import store from "../redux/store";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home/Home";
import FilmsForAdminContainer from "../pages/admin/films/FilmsForAdminContainer";
import UserListContainer from "../pages/admin/users/UsersContainer";
import FilmsForUserContainer from "../pages/user/films/FilmsForUserContainer";
import HeaderContainer from "../components/header/HeaderContainer";
import FilmsBookedContainer from "../pages/user/films-booked/FilmsBookedContainer";
import UserRequestsForDeleteContainer from "../pages/admin/user-requests-for-delete/UserRequestsForDeleteContainer";
import MyAccount from "../pages/user/my-account/MyAccount";

const App = () => (
  <BrowserRouter>
    <ModalProvider>
      <ModalRoot />
      <Provider store={store}>
        <>
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/admin/users" component={UserListContainer} />
            <Route path="/admin/films" component={FilmsForAdminContainer} />
            <Route
              path="/admin/deleteuser"
              component={UserRequestsForDeleteContainer}
            />
            <Route path="/user/myaccount" component={MyAccount} />
            <Route path="/user/films" component={FilmsForUserContainer} />
            <Route path="/user/reservation" component={FilmsBookedContainer} />
          </Switch>
        </>
      </Provider>
    </ModalProvider>
  </BrowserRouter>
);

export default App;

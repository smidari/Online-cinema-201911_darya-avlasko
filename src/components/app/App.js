import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ListUsersContainer from '../admin/listUsers/ListUsersContainer';
import HomeContainer from '../home/HomeContainer';
import HeaderContainer from '../ui/header/HeaderContainer';


const App = (props) => {
    return (
       <div>
            <Route exact path="/" render={() => <HomeContainer />} />
            <Route path="/admin" render={() => <HeaderContainer />} />
            {/*<Route path="/user" render={() => <Header  dataNav={props.state.dataNavUser}/>}/>*/}
            {/*<Route path="/admin/films" render={() => <ListFilms />}/>*/}
            <Route path="/admin/users" render={() => <ListUsersContainer />} />
      </div>
    );
};

export default App;

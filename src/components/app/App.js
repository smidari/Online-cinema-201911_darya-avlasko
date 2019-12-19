import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "../home/Home";
import Header from "../ui/header/Header";
import ListFilms from "../admin/listFilms/ListFilms";
import ListUsers from "../admin/listUsers/ListUsers";


const App = (props) => {

    return (
        <BrowserRouter>
            <Route exact path="/" render={() => <Home dataCarusel={props.state.dataCarusel} dataNav={props.state.dataNav}/>}/>
            <Route path="/admin" render={() => <Header  dataNav={props.state.dataNavAdmin}/>}/>
            <Route path="/user" render={() => <Header  dataNav={props.state.dataNavUser}/>}/>
            <Route path="/admin/films" render={() => <ListFilms thdata={props.state.thFilmData}/>}/>

            <Route path="/admin/users" render={() => <ListUsers thdata={props.state.thUsesrData}
                                                                trdata={props.state.trUsers}
                                                                deleteUser={props.deleteUser} />}/>


        </BrowserRouter>

    )
};

export default App;

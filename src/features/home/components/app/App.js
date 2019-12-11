import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from "../main/Main";
import Navbar from "../admin/navbar/Navbar";
import Header from "../ui/header/Header";
import ListFilms from "../admin/listFilms/ListFilms";
import ListUsers from "../admin/listUsers/ListUsers";


const App = (props) => {

    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Route exact path="/" component={Main}/>
                <Route path="/admin" component={Navbar}/>
                <Route path="/admin/films" render={ () => <ListFilms thFilmData={props.state.thFilmData} />}/>

            </BrowserRouter>
        </div>
    )
};

export default App;

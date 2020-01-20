import React from 'react';
import Carusel from './carusel/Carusel';
import Header from '../ui/header/Header';

const Home = props=> (
  <div className="app-wrapper">
    <Header dataNav={props.dataNav} />
    <Carusel />

  </div>
);
export default Home;

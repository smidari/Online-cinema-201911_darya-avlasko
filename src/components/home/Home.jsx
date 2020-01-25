import React from 'react';
import MyCarusel from './carusel/MyCarusel';
import Header from '../ui/header/Header';

const Home = props=> (
  <div className="app-wrapper">
    <Header dataNav={props.dataNav} />
    <MyCarusel />

  </div>
);
export default Home;

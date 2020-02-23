import React from "react";
import MyCarousel from "../../components/carousel/MyCarousel";
import Footer from "../../components/footer/Footer";
import "./home.css";

const Home = () => (
  <div className="app-wrapper">
    <MyCarousel />
    <Footer fixed="bottom" />
  </div>
);
export default Home;

import React from "react";
import Carusel from "../user/carusel/Carusel";
import Cards from "../user/cardsFilms/Cards";
import Table from "../ui/forms/table/Table";

const Main = () => {
    return (
        <div className='app-wrapper'>
            <Carusel/>
            <Cards/>
        </div>
    )
}
export default Main;
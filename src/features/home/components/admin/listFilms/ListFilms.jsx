import React from "react";
import Table from "../../ui/forms/table/Table";

const ListFilms = (props) => {

    return(
        <div>
            <Table thFilmData ={props.thFilmData} />
        </div>
    )
};

export default ListFilms;
import React from 'react';
import TableFilms from "../../ui/forms/table/TableFilms";
import BtnAddFilm from "./BtnAddFilm";

import MyForm from "./example";


class ListFilms extends React.Component {
    render() {
        return (
          <div>
              <MyForm addFilm={this.props.addFilm}/>
            {/* <Button variant="outline-info">Add</Button> */}
            <BtnAddFilm addFilm={this.props.addFilm}/>
            <TableFilms thdata={this.props.thdata} trdata={this.props.trdata} />

          </div>

        );
    }
}

export default ListFilms;


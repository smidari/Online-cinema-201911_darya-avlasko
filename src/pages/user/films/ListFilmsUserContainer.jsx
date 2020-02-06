import React from "react";
import { connect } from 'react-redux';
import ListFilmsUser from "./ListFilmsUser";
import {reserveFilm} from "../../../redux/actions/user-page";
import {getFilms} from "../../../redux/redusers/films-reducer";





class ListFilmsUserContainer extends React.Component{
    componentDidMount() {
        this.props.getFilms();
    }

    render() {
        return <ListFilmsUser
            thdata={this.props.thdata}
            films={this.props.films}
        />
    }

}


const mapStateToProps = state => ({
    thdata: state.userPage.tableFilmsForUsers.thFilmsDataForUser,
    films: state.films.films,
});

export default connect(mapStateToProps, {reserveFilm, getFilms})(ListFilmsUserContainer);



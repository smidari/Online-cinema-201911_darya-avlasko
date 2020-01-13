import React from 'react';
import Table from '../../ui/forms/table/Table';
import {Button} from 'react-bootstrap';


const ListFilms = (props) => {
    return (
        <div>
            <Button  variant="outline-info">Add</Button>
            <Table thdata={props.thdata} />
        </div>
    )
};

export default ListFilms;
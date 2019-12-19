import React from "react";
import Table from "../../ui/forms/table/Table";
import {Button} from "react-bootstrap";

const ListUsers = (props) => {

    return(
        <div>
            <Button  variant="outline-info">Add</Button>
        <Table thdata={props.thdata} trdata={props.trdata} deleteUser={props.deleteUser}/>
        </div>
    )
};

export default ListUsers;
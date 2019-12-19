import React from "react";
import {Button} from "react-bootstrap";

const Tr = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td>{props.email}</td>
            <Button variant="outline-danger" onClick={props.deleteUser}>{props.remove}</Button>
        </tr>
    )
};

export default Tr;
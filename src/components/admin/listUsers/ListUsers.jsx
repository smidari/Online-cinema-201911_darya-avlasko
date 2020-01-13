import React from 'react';
import Table from '../../ui/forms/table/Table';
import { Button } from 'react-bootstrap';

class ListUsers extends React.Component {
    render() {
        return (
            <div>
                <Button variant="outline-info">Add</Button>
                <Table thdata={this.props.thdata} trdata={this.props.trdata} deleteUser={this.props.deleteUser} />
            </div>
        );
    }
}

export default ListUsers;

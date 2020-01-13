import React from 'react';
import Th from './Th';
import Tr from './Tr';

const Table = (props) => {
    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                <tr>
                    {props.thdata.map(item => <Th th={item.th} scope={item.scope}/>)}
                </tr>
                </thead>
                <tbody className="body-table-films">
                {props.trdata.map(item => <Tr id={item.id} fname={item.fname}
                                              lname={item.lname} email={item.email}
                                              remove={item.remove} deleteUser={props.deleteUser}/> )}
                </tbody>
            </table>
        </div>
    )
};

export default Table;
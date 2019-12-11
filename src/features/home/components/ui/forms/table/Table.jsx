import React from 'react';


const Table = (props) => {

    const Th = (props) => {
        return (
            <th scope={props.scope}>{props.th}</th>
        )
    };

    return (

        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                <tr>
                    {props.thFilmData.map(item => <Th th={item.th} scope={item.scope}/>)}
                    {/*{props.thUsersData.map(item => <Th th={item.th} scope={item.scope}/>)}*/}
                </tr>
                </thead>
                <tbody className="body-table-films">
                </tbody>
            </table>
        </div>
    )
};

export default Table;
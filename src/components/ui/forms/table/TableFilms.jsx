import React from 'react';
import Th from './Th';
import TrFilms from "./TrFilms";

const TableFilms = props => (
    <div className="container mt-3">
        <table className="table table-striped">
            <thead>
            <tr>
                {props.thdata.map(item => <Th th={item.th} scope={item.scope} />)}
            </tr>
            </thead>
            <tbody className="body-table-films">
            {props.trdata.map(item => (
                <TrFilms
                    id={item.id}
                    title={item.title}
                    picture={item.picture}
                    description={item.description}
                    price={item.price}
                    start={item.start}
                    end={item.end}
                    tags={item.tags}
                />
            ))}
            </tbody>
        </table>
    </div>
);

export default TableFilms;


import React from 'react';

const Btn = (props) => {
    return (
        <button style={props.style} onClick={props.action}>{props.title}
        </button>
    )
};

export default Btn;
import React from 'react';

const Btn = props => (
  <button style={props.style} onClick={props.action}>{props.title}
  </button>
);

export default Btn;

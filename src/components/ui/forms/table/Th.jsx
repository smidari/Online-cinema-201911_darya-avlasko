import React from 'react';
import PropTypes from "prop-types";

const Th = props => <th key={props.th} scope={props.scope}>{props.th}</th>

Th.propTypes = {
    th: PropTypes.string,
    scope: PropTypes.string,
};

export default Th;





import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MyAccount = (props) => (
      <Button variant="danger" onClick={() => props.deleteMyAccount()}>Delete account</Button>
);

MyAccount.propTypes = {
  deleteMyAccount: PropTypes.func,
};

export default MyAccount;

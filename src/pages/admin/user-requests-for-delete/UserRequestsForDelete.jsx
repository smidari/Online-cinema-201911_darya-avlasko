import React from "react";
import PropTypes from "prop-types";
import Table from "../../../components/table/MyTable";

const columns = ["#", "First name", "Last name", "Email", "Remove user"];

const UserRequestsForDelete = ({ usersForDelete }) => {
  return (
    <div>
      <Table columns={columns} rows={usersForDelete} />
    </div>
  );
};

UserRequestsForDelete.propTypes = {
  usersForDelete: PropTypes.arrayOf(
    PropTypes.shape({
      "#": PropTypes.number,
      "First name": PropTypes.string,
      "Last name": PropTypes.string,
      Email: PropTypes.node
    })
  )
};
UserRequestsForDelete.defaultProps = {
  usersForDelete: []
};

export default UserRequestsForDelete;

import React from "react";
import PropTypes from "prop-types";
import MyTable from "../../../components/mytable/MyTable";

const columns = ["#", "First name", "Last name", "Email", "Remove user"];

const ListDeleteUsers = ({ usersForDelete }) => {
  return (
    <div>
      <MyTable columns={columns} rows={usersForDelete} />
    </div>
  );
};

ListDeleteUsers.propTypes = {
  usersForDelete: PropTypes.arrayOf(
    PropTypes.shape({
      "#": PropTypes.number,
      "First name": PropTypes.string,
      "Last name": PropTypes.string,
      Email: PropTypes.node
    })
  )
};
ListDeleteUsers.defaultProps = {
  usersForDelete: []
};

export default ListDeleteUsers;

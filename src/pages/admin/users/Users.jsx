import React from "react";
import PropTypes from "prop-types";
import Preloader from "../../../components/preloader/Preolader";
import MyTable from "../../../components/mytable/MyTable";

const columns = ["#", "First name", "Last name", "Email", "Remove user"];

class Users extends React.Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users, isFetching, deleteUser } = this.props;
    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <MyTable columns={columns} rows={users} func={deleteUser} />
        )}
      </>
    );
  }
}

Users.propTypes = {
  isFetching: PropTypes.bool,
  getUsers: PropTypes.func,
  deleteUser: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      "#": PropTypes.number,
      "First name": PropTypes.string,
      "Last name": PropTypes.string,
      Email: PropTypes.node,
      Password: PropTypes.node,
      isAdmin: PropTypes.bool
    })
  )
};

Users.defaultProps = {
  isFetching: false,
  getUsers: () => {},
  deleteUser: () => {},
  users: []
};

export default Users;

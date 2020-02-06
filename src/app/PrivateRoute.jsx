import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, admin, user, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                admin || user
                    ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/" }}
                    />
                )
            }
        />
    );
};

const mapStateToProps = state => ({ admin: state.users.admin, user: state.users.user});
export default connect(mapStateToProps)(PrivateRoute);

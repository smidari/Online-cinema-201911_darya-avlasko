import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <ul className="nav nav-tabs mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/films" aria-selected="true">List
                        films</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/admin/users">List Users</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;
import React from "react";
import './Header.css';

const Header = () => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Online cinema</a>

        <div className="collapse navbar-collapse">
            <ul className="nav nav-tabs mr-auto">
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href=".list-films"
                                            aria-selected="true">List
                    films</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href=".list-users">List Users</a>
                </li>
            </ul>
        </div>
        <a className = "navbar-brand text-info btn-log-out" href = "#" >Log out </a>
    </nav>


};

export default Header;
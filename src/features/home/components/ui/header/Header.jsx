import React from "react";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand text-info" href="#">Online cinema
                </a>
                <div>
                    <a className=" text-success" href="/admin">
                        Admin
                    </a>
                    <div>
                        <a className=" text-success" href="/user">
                            User
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;
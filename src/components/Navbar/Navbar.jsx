import React from "react";
import MenuToggler from "./MenuToggler";
import Menu from "./Menu";

function Navbar() {
    return (
        <nav>
            <div className="container">
                <MenuToggler />
                <Menu />
            </div>
        </nav>
    );
}

export default Navbar;
import React from "react";
import MenuToggler from "./MenuToggler";
import Tool from "./Tool";
import Menu from "./Menu";

function Navbar() {
    return (
        <nav>
            <div className="container">
                <MenuToggler />
                <Tool />
                <Menu />
            </div>
        </nav>
    );
}

export default Navbar;
import React from "react";
import MenuToggler from "./MenuToggler";
import Menu from "./Menu";

function Navbar() {
    return (
        <nav>
            <MenuToggler />
            <Menu />
        </nav>
    );
}

export default Navbar;
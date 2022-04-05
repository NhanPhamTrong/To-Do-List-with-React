import React from "react";
import $ from "jquery";

function ClickMenuToggler() {
    const menuToggler = $(".menu-toggler");
    const menu = $("#menu");

    menuToggler.toggleClass("active");
    menu.toggleClass("active");
}

function MenuToggler() {
    return (
        <button className="menu-toggler" onClick={ClickMenuToggler} type="button" aria-label="Menu Toggler"></button>
    );
}

export default MenuToggler;
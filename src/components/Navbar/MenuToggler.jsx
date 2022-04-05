import React from "react";
import $ from "jquery";

function ClickMenuToggler() {
    $(".menu-toggler").toggleClass("active");
    $("#menu").toggleClass("active");
}

function MenuToggler() {
    return (
        <div className="container">
            <button className="menu-toggler" onClick={ClickMenuToggler} type="button" aria-label="Menu Toggler"></button>
        </div>
    );
}

export default MenuToggler;
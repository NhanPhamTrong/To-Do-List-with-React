import React from "react";
import $ from "jquery";
import AddListBtn from "./AddListBtn";

function Menu() {

    function GetList(e) {
        let href = e.target.href;
        let idOfList = href.slice(href.indexOf("#"), );

        $(idOfList).addClass("open");
    }

    return (
        <React.StrictMode>
            <div id="menu">
                <AddListBtn />
                <ul>
                    <li>
                        <a href="#list-1" onClick={GetList}>List's name 1<span></span></a>
                    </li>
                    <li>
                        <a href="#list-2" onClick={GetList}>List's name 2<span></span></a>
                    </li>
                    <li>
                        <a href="#list-3" onClick={GetList}>List's name 3<span></span></a>
                    </li>
                    <li>
                        <a href="#list-4" onClick={GetList}>List's name 4<span></span></a>
                    </li>
                </ul>
            </div>
        </React.StrictMode>
    );
}

export default Menu;
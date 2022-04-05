import React from "react";
import $ from "jquery";
import AddListBtn from "./AddListBtn";

function Menu() {

    function GetList(e) {
        let listTitle = e.target.title;
        let listId = listTitle.slice(listTitle.indexOf(" ") + 1, );

        $(".list-content").removeClass("open");
        $("#list-" + listId).addClass("open");
    }

    return (
        <React.StrictMode>
            <div id="menu">
                <AddListBtn />
                <ul>
                    <li>
                        <a href="#list-1" onClick={GetList} title="List 1">List's name 1<span></span></a>
                    </li>
                    <li>
                        <a href="#list-2" onClick={GetList} title="List 2">List's name 2<span></span></a>
                    </li>
                    <li>
                        <a href="#list-3" onClick={GetList} title="List 3">List's name 3<span></span></a>
                    </li>
                    <li>
                        <a href="#list-4" onClick={GetList} title="List 4">List's name 4<span></span></a>
                    </li>
                </ul>
            </div>
        </React.StrictMode>
    );
}

export default Menu;
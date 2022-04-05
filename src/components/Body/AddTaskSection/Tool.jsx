import React from "react";
import $ from "jquery";

function ClickBookmark() {
    const bookmark = $(".bookmark");
    bookmark.toggleClass("active");
}

function ClickDeleteList() {
    
}

function Tool() {
    return (
        <div className="tool">
            <button className="bookmark" onClick={ClickBookmark} type="button" aria-label="Bookmark"></button>
            <button className="delete" onClick={ClickDeleteList} type="button" aria-label="Delete List"></button>
        </div>
    );
}

export default Tool;
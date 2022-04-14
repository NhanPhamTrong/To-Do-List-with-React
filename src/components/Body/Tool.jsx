import React from "react";

function Tool(props) {
    function ClickBookmark(e) {
        e.target.classList.toggle("active");
        props.onBookmark(props.id);
    }
    
    function ClickDeleteList() {
        props.onDelete(props.id);
    }

    return (
        <div className="tool">
            <button className={"bookmark " + props.active} onClick={ClickBookmark} type="button" aria-label="Bookmark"></button>
            <button className="delete" onClick={ClickDeleteList} type="button" aria-label="Delete List"></button>
        </div>
    );
}

export default Tool;
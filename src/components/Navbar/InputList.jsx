import React, { useState } from "react";

function InputList(props) {
    const [list, setList] = useState("");

    function HandleChange(e) {
        const newList = e.target.value;
        setList(newList);
    }

    function AddListOnClick() {
        props.onAdd(list);
        setList("");
    }

    function AddListOnEnter(e) {
        if (e.key === "Enter") {
            AddListOnClick();
        }
    }

    return (
        <div className="input-list">
            <button type="button" onClick={AddListOnClick} aria-label="Add List">Add List</button>
            <input type="text" onChange={HandleChange} onKeyDown={AddListOnEnter} value={list} placeholder="List's name..." />
        </div>
    )
}

export default InputList;
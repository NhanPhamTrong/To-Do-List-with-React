import React, { useState } from "react";

function InputList(props) {
    const [list, setList] = useState("");

    function HandleChange(e) {
        const newList = e.target.value;
        setList(newList);
    }

    function AddList(e) {
        if (e.key === "Enter") {
            props.onAdd(list);
            setList("");
        }
    }

    return (
        <div className="input-list">
            <button type="button" aria-label="Add List">Add List</button>
            <input type="text" onChange={HandleChange} onKeyDown={AddList} value={list} placeholder="List's name..." />
        </div>
    )
}

export default InputList;
import React, { useState } from "react";
import Tool from "./Tool";

function ListContent(props) {
    const [task, setTask] = useState("");

    function HandleChange(e) {
        const newTask = e.target.value;
        setTask(newTask);
    }

    function AddOnClick() {
        if (task !== "") {
            props.onAdd(task);
            setTask("");
        }
    }

    function AddOnEnter(e) {
        if (e.key === "Enter") {
            AddOnClick();
        }
    }

    function ClickBookmark() {
        props.onBookmark(props.id);
    }

    function ClickDeleteList() {
        props.onDelete(props.id);
    }

    return (
        <>
            <div className="add-task">
                <div className="container">
                    <div className="heading">
                        <h1>{props.listName}</h1>
                        <Tool id={props.id} onBookmark={ClickBookmark} onDelete={ClickDeleteList} active={props.active} />
                    </div>
                    <form className="input-task" onSubmit={(e) => e.preventDefault()}>
                        <button type="button" onClick={AddOnClick} aria-label="Add Task"></button>
                        <input type="text" onKeyDown={AddOnEnter} onChange={HandleChange} value={task} placeholder="Your task..." />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ListContent;
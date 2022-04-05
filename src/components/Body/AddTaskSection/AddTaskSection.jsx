import React from "react";
import Tool from "./Tool";
import InputTask from "./InputTask";

function AddTaskSection(props) {
    return (
        <div className="add-task">
            <div className="container">
                <div className="heading">
                    <h1>{props.listName}</h1>
                    <Tool />
                </div>
                <InputTask />
            </div>
        </div>
    );
}

export default AddTaskSection;
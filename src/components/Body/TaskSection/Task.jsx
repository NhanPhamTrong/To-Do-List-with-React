import React from "react";
import TaskBtn from "./TaskBtn";

function Task(props) {
    return (
        <li>
            <div className="checkbox"></div>
            <p>{props.task}</p>
            <TaskBtn />
        </li>
    );
}

export default Task;
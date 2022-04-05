import React from "react";

function UpdateTask() {
    
}

function DeleteTask() {

}

function TaskBtn() {
    return (
        <div className="task-btn">
            <button type="button" onClick={UpdateTask} aria-label="Update Task"></button>
            <button type="button" onClick={DeleteTask} aria-label="Delete Task"></button>
        </div>
    );
}

export default TaskBtn;
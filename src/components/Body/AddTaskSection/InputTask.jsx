import React from "react";
import $ from "jquery";

function AddTask() {
    const newTask = $(".input-task input");
    const taskList = $("#task-section ul");

    var taskHtml = "" +
    "<Task task=" + newTask.val() + " />";

    if (newTask.val() !== "") {
        taskList.html(taskList.html() + taskHtml)
    }
}

function InputTask() {
    return (
        <div className="input-task">
            <button type="button" onClick={AddTask} aria-label="Add Task"></button>
            <input type="text" placeholder="Your task..." />
        </div>
    );
}

export default InputTask;
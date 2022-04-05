import React from "react";
import Task from "./Task";
import content from "../../../content";

function TaskSection(props) {
    return (
        <div className="task-section">
            <div className="container">
                <ul>
                    {content[props.id - 1].taskList.map(function(e) {
                        return (
                            <Task
                                key={content[props.id - 1].taskList.indexOf(e)}
                                task={e}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TaskSection;
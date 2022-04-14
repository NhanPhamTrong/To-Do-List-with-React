import React, { useState } from "react";
import Task from "./Task";
import InputTask from "./InputTask";

function ListContent(props) {
    const [task, setTask] = useState([]);

    function AddTask(newTask) {
        setTask(prevValue => {
            return [...prevValue, newTask];
        })
    }

    function SubmitUpdate(id, newText) {
        setTask(prevValue => {
            prevValue[id] = newText;
            return [...prevValue]
        });
    }

    function DeleteTask(id) {
        setTask(prevValue => {
            return prevValue.filter((e, index) => {
                return index !== id;
            });
        });
    }

    function ClickBookmark() {
        props.onBookmark(props.id);
    }

    function DeleteList(id) {
        props.onDelete(props.id);
        setTask([]);
    }

    return (
        <div id={"list-" + props.id} className={"list-content " + props.open}>
            <InputTask id={props.id} active={props.active} onAdd={AddTask} onBookmark={ClickBookmark} onDelete={DeleteList} listName={props.listName} />
            <div className="task-section">
                <div className="container">
                    <ul>
                        {task.map((e, index) => {
                            return <Task key={index} id={index} task={e} onUpdate={SubmitUpdate} onDelete={DeleteTask} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListContent;
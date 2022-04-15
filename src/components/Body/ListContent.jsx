import React, { useState } from "react";
import Task from "./Task";
import InputTask from "./InputTask";
import ListStatistic from "./ListStatistic";

function ListContent(props) {
    const [task, setTask] = useState({
        text: [],
        completed: [],
        display: [],
        countActive: 0
    });

    function AddTask(newTask) {
        setTask(prevValue => {
            return {
                text: [...prevValue.text, newTask],
                completed: [...prevValue.completed, ""],
                display: [...prevValue.display, "grid"],
                countActive: prevValue.completed.filter(x => x !== "completed").length + 1
            }
        });
    }

    function SubmitUpdate(id, newText) {
        task.text[id] = newText;
        setTask(prevValue => {
            return {
                text: [...prevValue.text],
                completed: [...prevValue.completed],
                display: [...prevValue.display],
                countActive: prevValue.completed.filter(x => x !== "completed").length
            }
        });
    }

    function DeleteTask(id) {
        setTask(prevValue => {
            return {
                text: prevValue.text.filter((e, index) => index !== id),
                completed: prevValue.completed.filter((e, index) => index !== id),
                display: prevValue.display.filter((e, index) => index !== id),
                countActive: prevValue.completed[id] === "completed" ? prevValue.completed.filter(x => x !== "completed").length : prevValue.completed.filter(x => x !== "completed").length - 1
            }
        });
    }

    function ClickBookmark() {
        props.onBookmark(props.id);
    }

    function DeleteList(id) {
        props.onDelete(props.id);
        setTask(prevValue => {
            return {
                text: [],
                completed: [],
                display: [], 
                countActive: 0
            }
        })
    }

    function CheckCompleted(id) {
        task.completed[id] = task.completed[id] === "completed" ? "" : "completed";
        setTask(prevValue => {
            return {
                text: [...prevValue.text],
                completed: [...prevValue.completed],
                display: [...prevValue.display],
                countActive: prevValue.completed.filter(x => x !== "completed").length
            }
        });
    }

    function GetAll() {
        for (let i = 0; i < task.completed.length; i++) {
            task.display[i] = "grid";
        }
        setTask(prevValue => {
            return {
                text: [...prevValue.text],
                completed: [...prevValue.completed],
                display: [...prevValue.display],
                countActive: prevValue.completed.filter(x => x !== "completed").length
            }
        });
    }

    function GetCompleted() {
        for (let i = 0; i < task.completed.length; i++) {
            task.display[i] = task.completed[i] === "completed" ? "grid" : "none";
        }
        setTask(prevValue => {
            return {
                text: [...prevValue.text],
                completed: [...prevValue.completed],
                display: [...prevValue.display],
                countActive: prevValue.completed.filter(x => x !== "completed").length
            }
        });
    }

    function GetActive() {
        for (let i = 0; i < task.completed.length; i++) {
            task.display[i] = task.completed[i] === "completed" ? "none" : "grid";
        }
        setTask(prevValue => {
            return {
                text: [...prevValue.text],
                completed: [...prevValue.completed],
                display: [...prevValue.display],
                countActive: prevValue.completed.filter(x => x !== "completed").length
            }
        });
    }

    return (
        <div id={"list-" + props.id} className={"list-content " + props.open}>
            <InputTask id={props.id} active={props.active} onAdd={AddTask} onBookmark={ClickBookmark} onDelete={DeleteList} listName={props.listName} />
            <div className="task-section">
                <div className="container">
                    <ul>
                        {task.text.map((e, index) => {
                            return <Task key={index} id={index} task={e} completed={task.completed[index]} display={task.display[index]} onUpdate={SubmitUpdate} onDelete={DeleteTask} onCheckCompleted={CheckCompleted} />
                        })}
                    </ul>
                </div>
            </div>
            <ListStatistic count={task.countActive} onGetAll={GetAll} onGetCompleted={GetCompleted} onGetActive={GetActive} />
        </div>
    );
}

export default ListContent;
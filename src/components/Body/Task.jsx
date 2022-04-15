import React, { useState } from "react";

function Task(props) {
    const [edit, setEdit] = useState({
        editable: "",
        editText: "",
        inputValue: ""
    });

    function HandleChange(e) {
        setEdit(prevValue => {
            return {
                editable: prevValue.editable,
                editText: e.target.value,
                inputValue: e.target.value
            }
        })
    }

    function SubmitUpdateOnClick() {
        if (edit.editable === "edit") {
            if (edit.inputValue !== "") {
                props.onUpdate(props.id, edit.editText);
                setEdit(prevValue => {
                    return {
                        editable: "",
                        editText: prevValue.editText,
                        inputValue: ""
                    }
                })
            }
            else {
                setEdit(prevValue => {
                    return {
                        editable: "",
                        editText: prevValue.editText,
                        inputValue: ""
                    }
                })
            }
        }
        else {
            setEdit(prevValue => {
                return {
                    editable: "edit",
                    editText: prevValue.editText,
                    inputValue: prevValue.inputValue
                }
            })
        }
    }

    function SubmitUpdateOnEnter(e) {
        if (e.key === "Enter") {
            SubmitUpdateOnClick();
        }
    }

    function DeleteTask() {
        props.onDelete(props.id);
        setEdit(prevValue => {
            return {
                editable: prevValue.editable,
                editText: "",
                inputValue: prevValue.inputValue
            }
        })
    }

    function CheckCompleted(e) {
        if (e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT") {
            e.target.closest("li").classList.toggle("completed");
            props.onCheckCompleted(props.id);
        }
    }

    return (
        <li className={props.completed} style={{display: props.display}} onClick={CheckCompleted}>
            <div className="checkbox"></div>
            <div className={"task-text " + edit.editable}>
                <p>{props.task}</p>
                <input type="text" onKeyDown={SubmitUpdateOnEnter} onChange={HandleChange} value={edit.inputValue} />
            </div>
            <div className="task-btn">
                <button className="update-task" type="button" onClick={SubmitUpdateOnClick} aria-label="Update Task"></button>
                <button className="delete-task" type="button" onClick={DeleteTask} aria-label="Delete Task"></button>
            </div>
        </li>
    );
}

export default Task;
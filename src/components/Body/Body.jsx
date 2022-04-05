import React from "react";
import AddTaskSection from "./AddTaskSection/AddTaskSection";
import TaskSection from "./TaskSection/TaskSection";
import content from "../../content";

function ListContent(props) {
    return (
        <div id={"list-" + props.id} className="list-content">
            <AddTaskSection listName={props.listName} />
            <TaskSection id={props.id}/>
        </div>
    );
}

function CreateBody(list) {
    return (
        <ListContent
            key={list.id}
            id={list.id}
            listName={list.listName}
        />
    );
}

function Body() {
    return (
        <main>
            {content.map(CreateBody)}
        </main>
    );
}

export default Body;
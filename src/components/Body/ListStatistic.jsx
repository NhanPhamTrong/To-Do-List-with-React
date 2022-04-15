import React, { useState } from "react";

function ListStatistic(props) {
    const [active, setActive] = useState(["", "", ""]);

    function ResetActive(order) {
        for (let i = 0; i < active.length; i++) {
            active[i] = "";
        }
        active[order] = "active";
        setActive(prevValue => [...prevValue]);
    }

    function GetAll(e) {
        ResetActive(e.target.getAttribute("order"));
        props.onGetAll();
    }

    function GetCompleted(e) {
        ResetActive(e.target.getAttribute("order"));
        props.onGetCompleted();
    }

    function GetActive(e) {
        ResetActive(e.target.getAttribute("order"));
        props.onGetActive();
    }

    return (
        <div className="list-statistic">
            <div className="container">
                <div className="sort">
                    <button className={active[0]} onClick={GetAll} order="0" type="button" aria-label="All tasks">All</button>
                    <button className={active[1]} onClick={GetCompleted} order="1" type="button" aria-label="Completed tasks">Completed</button>
                    <button className={active[2]} onClick={GetActive} order="2" type="button" aria-label="Active tasks">Active</button>
                </div>
                <p>{props.count + (props.count > 1 ? " items left" : " item left")}</p>
            </div>
        </div>
    )
}

export default ListStatistic;
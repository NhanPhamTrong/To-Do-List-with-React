import React, { useState } from "react";
import "../css/main.css";
import ListContent from "./Body/ListContent";
import InputList from "./Navbar/InputList";

function App() {
    const [active, setActive] = useState("");
    const [bookmark, setBookmark] = useState([]);
    const [theme, setTheme] = useState("dark");

    const [list, setList] = useState({
        listName: [],
        listInput: "",
        openList: []
    });

    function ClickMenuToggler(e) {
        setActive(e.target.classList.contains("active") ? "" : "active");
    }

    function ClickChangeTheme(e) {
        setTheme(e.target.classList.contains("dark") ? "light" : "dark");
    }

    function AddList(listInputText) {
        setList(prevValue => {
            return {
                listName: prevValue.listName,
                listInput: "",
                openList: prevValue.openList
            }
        });
        if (listInputText !== "") {
            setBookmark(prevValue => {
                return [...prevValue, ""]
            });
            setList(prevValue => {
                return {
                    listName: [...prevValue.listName, listInputText],
                    listInput: prevValue.listInput,
                    openList: [...prevValue.openList, ""]
                }
            });
        }
    }

    function GetList(e) {
        e.preventDefault();
        const listOrder = e.target.getAttribute("order");
        for (let i = 0; i < list.openList.length; i++) {
            list.openList[i] = i === parseInt(listOrder) ? "open" : "";
        }
        setList(prevValue => {
            return {
                listName: prevValue.listName,
                listInput: prevValue.listInput,
                openList: prevValue.openList
            }
        });
        setActive("");
    }

    function BookmarkList(id) {
        bookmark[id] = bookmark[id] === "active" ? "" : "active";
        setBookmark(prevValue => [...prevValue]);
    }

    function DeleteList(id) {
        setBookmark(prevValue => {
            return prevValue.filter((e, index) => index !== id)
        });
        setList(prevValue => {
            return {
                listName: prevValue.listName.filter((e, index) => index !== id),
                listInput: prevValue.listInput,
                openList: prevValue.openList.filter((e, index) => index !== id)
            }
        });
    }

    return (
        <>
            <button className={"menu-toggler " + active} onClick={ClickMenuToggler} type="button" aria-label="Menu Toggler"></button>
            <nav className={active}>
                <div className="container">
                    <button className={"change-theme " + theme} onClick={ClickChangeTheme} type="button" aria-label="Menu Toggler"></button>
                </div>
                <div id="menu" className={active}>
                    <InputList onAdd={AddList} list={list.listInput} />
                    <ul>
                        {list.listName.map((e, index) => {
                            return (
                                <li key={index}>
                                    <a href={"#list-" + index} onClick={GetList} order={index}>{e}<span className={bookmark[index]}></span></a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
            <main>
                {list.listName.map((e, index) => {
                    return <ListContent key={index} id={index} open={list.openList[index]} onBookmark={BookmarkList} active={bookmark[index]} onDelete={DeleteList} listName={e} />
                })}
            </main>
        </>
    );
}

export default App;
import React from "react";
import "../css/main.css";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";

function App() {
    return (
        <React.StrictMode>
            <Navbar />
            <Body />
        </React.StrictMode>
    );
}

export default App;
import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

function primeiroJSX(){
    return (
        <div>
            Primeiro JSX
        </div>
    )
}

const App = () => {

    return(
        <div className="App">
            Hello World
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
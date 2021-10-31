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

const element = 'Teste elemento 1 que pode ser um string';
const element2 = <h1>Teste elemento 2 que pode ser um html</h1>;

const App = () => {

    return(
        <div className="App">
            Hello World
            {primeiroJSX()}
            {element}
            {element2}
        </div>
    )
}



const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
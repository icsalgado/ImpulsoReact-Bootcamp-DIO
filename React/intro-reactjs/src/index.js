import React, { Component } from "react";
import ReactDom from "react-dom";
import "./styles.css";
import "./Button";
import Button from "./Button";

function primeiroJSX(){
    return (
        <div>
            Primeiro JSX
        </div>
    )
}

const element = 'Teste elemento 1 que pode ser um string';
const element2 = <h1>Teste elemento 2 que pode ser um html</h1>;

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            clock: 1000,
            copo: 'agua'
        }
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })

    } 

    render(){
        const { clock, copo } = this.state

        return(
            <div>
                <h1>{ clock }</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
}

/*
const App = () => {

    return(
        <div className="App">
            Hello World
            {primeiroJSX()}
            {element}
            {element2}
            <Button name="Componente botão" onClick={() => alert("Olá")} />
        </div>
    )
}

*/

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
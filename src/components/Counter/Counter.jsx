import React from "react";

export class Counter extends React.Component{
    constructor(){
        super();
        this.state = { contador: 0}
        console.log('Construindo a classe');
    }

    UNSAFE_componentWillMount(){
        console.log("O nosso contador será montado.");
      }
    
      componentDidMount(){
        console.log('O componente foi montado!');
      }

    render(){
        console.log('Renderizando Componente');
        return(
            <div>
                <h1>{this.state.contador}</h1>
                <button onClick={() => {
                    console.log('Aumentando contador');
                   this.setState({contador: this.state.contador + 1})
                }}>Aumentar
                </button>
                <button onClick={() =>{
                    console.log('Diminuindo contador');
                    this.setState({contador: this.state.contador - 1})
                }}>Diminuir</button>
            </div>
        )
    }
}
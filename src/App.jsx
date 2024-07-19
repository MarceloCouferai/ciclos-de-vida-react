import React from "react";
import { Counter } from "./components/Counter/Counter";

export class App extends React.Component {
  constructor(){
    super();
    this.state = { showComponent: false }
  }

  render(){
    return (
      <div>
    <h1>Ciclo de Vida no React</h1>

    <button onClick={() => {
      this.setState({showComponent: !this.state.showComponent})
    }}>
      { this.state.showComponent ? 'Remove Component' : 'Add Component' }</button>

      {
        this.state.showComponent ? <Counter /> : null 
      }
   </div>
  );
}
}

export default App;

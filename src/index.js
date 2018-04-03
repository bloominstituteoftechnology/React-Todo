import React, { Component } from 'react';
import { render } from 'react-dom';

import Strike from './Strike';


class App extends Component {
    constructor() {
        super();
        this.state = {
            newToDo: '',
            currentToDo: ["Walk the dog", "Buy milk", "Get a haircut"]
        };
    }

    handleAddToDo = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
    handleSubmitToDo = () => {
        const { currentToDo } = this.state;
        currentToDo.push(this.state.newToDo);
        this.setState({ currentToDo, newToDo: "" });
      };


    render(){
        return (
            <div class="container">
          
                <h1 class="header__content"> Things To Do: </h1>
                
        {this.state.currentToDo.map(currentToDo => <Strike thing={currentToDo} />)}

        <input
          type="text"
          name="newToDo"
          value={this.state.newToDo}
          placeholder="Add ToDo"
          onChange={this.handleAddToDo}
        />
        <button onClick={this.handleSubmitToDo}>Add ToDo</button>
      </div>


        )

    }
}

render(<App />, document.getElementById('root'));


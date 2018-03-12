import React, { Component } from 'react';
import InputBar from './InputBar';

class App extends Component {
    constructor() {
        super();

        this.state = {
            toDos: [],
            newtoDos: ''
        };
    }

    addtoDos = (event) => {
        event.preventDefault();
        const toDossList = this.state.toDos;
        toDossList.push(this.state.newtoDos);
        this.setState({
            newtoDos: '',
            toDoss: toDossList
        });
    };

    handletoDosInput = (event) => {
        this.setState({ newtoDos: event.target.value });
    };

    render() {
        return (
            <div>
                {this.state.toDos.map((toDos, i) => <InputBar key={i} thing={toDos} />)}
                <form onSubmit={this.addtoDos}><input type="text" onChange={this.handletoDosInput} placeholder="New task" value={this.state.newtoDos} /></form>
            </div>
        );
    }
}

export default App;

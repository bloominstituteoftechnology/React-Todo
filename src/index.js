import React, { Component } from 'react';
import { render } from 'react-dom';
import ListOfNames from './components/toDo';
import ToDoInputField from './components/inputField';

const styles = {
    fontFamily: 'Monospace',
    textAlign: 'center',
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            toDoList: []
        };
        this.onSave = this.onSave.bind(this);
    }

    componentWillMount() {
        this.setState({toDoList: ['Go to Apple Store', 'Create To-Do App', 'Sell on E-Bay']});
    }

    onSave(text) {
        this.setState({
            toDoList: [...this.state.toDoList, text]
        });
    }

    render() {
        return (
            <div style={styles}>
                <h1> AI Powered To-Do List :-) </h1>
                <ListOfNames toDoList={this.state.toDoList} />
                <ToDoInputField onSave={this.onSave} />
                <div>{this.state.name}</div>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));

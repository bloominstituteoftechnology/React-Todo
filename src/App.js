import React from 'react';
import ToDoList from './ToDoList';
import AddToList from './AddToList';
import RemoveButton from './RemoveButton';
import { LoadState, SaveState } from './localStorage';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = LoadState();
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeClick = this.removeClick.bind(this);
        this.completeClick = this.completeClick.bind(this);
        this.removeAllClick = this.removeAllClick.bind(this);
    }
    
    componentDidUpdate() {
        SaveState(this.state);
    }
    render() {
        return (
            <div className="entire">
                <h1 className="title">To Do List</h1>
                <ToDoList toDos={this.state.toDos} removeClick={this.removeClick} completeClick={this.completeClick}/>
                <AddToList handleClick={this.handleClick} handleChange={this.handleChange}/>
                <RemoveButton removeAllClick={this.removeAllClick}/>
            </div>
        );
    }
    handleClick(e) {
        e.preventDefault();
        if (this.state.input !== '') {
            this.setState((prev) => 
                prev.toDos.push({
                    text: this.state.input,
                    completed: false,
                    classname: 'incomplete'}));
        }
        this.setState({input: ''});
    }
    handleChange(e) {
        this.setState({input: e.target.value});
        e.target.value = '';
    }
    removeClick(e) {
        let i;
        this.state.toDos.forEach((todo, ind) => {
            if (todo.text === e.target.value) i = ind;
        });
        this.setState((prev) => {
            prev.toDos.splice(i, 1);
        });
    }
    completeClick(e) {
        let i;
        this.state.toDos.forEach((todo, ind) => {
            if (todo.text === e.target.value) i = ind;
        });
        this.setState((prev) => {
            prev.toDos[i].classname= 'complete';
        });
        this.setState((prev) => {
            prev.toDos[i].completed = true;
        });
    }
    removeAllClick() {
        const newToDos = [];
        this.state.toDos.forEach((todo) => {
            if(!todo.completed === true) {
                newToDos.push(todo);
            }
        });
        this.setState({toDos: newToDos });
    }
}

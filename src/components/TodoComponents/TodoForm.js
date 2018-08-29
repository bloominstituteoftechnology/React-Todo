import React from 'react';
import './TodoForm.css';

export default class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            inputText: ''
        }
        this.input = React.createRef();
    }
    
    inputText = (e) => {
        this.setState({
            inputText: e.target.value
        });
    }

    addTodo = (e) => {
        // prevent form from submitting to non-existant server
        e.preventDefault();
        // run the "addTodo" function passed down from App in the following manner:
        // App --> TodoList --> TodoForm(execute function and it will "bubble back up" like the following:) Todoform --> TodoList --> App
        this.props.addTodo(this.state.inputText);
        // Reset the value of this components state inputText back to blank
        this.setState({
            inputText: '',
        });
        // Using the ref I created on the input element and instantiated on line 10 in the constructor, I reset the input value (on the physical web page the user sees) back to blank
        this.input.current.value = '';
    }
    render() {
        return (
            <form className="todo-form" onSubmit={this.addTodo}>
                <input ref={this.input} type="text" placeholder="...todo" onChange={this.inputText} />
                <button type="submit" >Add Todo</button>
                <button type="reset">Clear Completed</button>
            </form>
        )
    }
}
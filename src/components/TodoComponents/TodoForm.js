import React from 'react';
import './TodoForm.css';
import moment from 'moment';

export default class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            inputText: '',
            body: '',
        }
        this.input = React.createRef();
        this.textAreaRef = React.createRef();
    }
    
    inputText = (e) => {
        this.setState({
            inputText: e.target.value.trim(),
        });
    }

    textAreaInput = (e) => {
        this.setState({
            body: e.target.value.trim()
        })
    }

    addTodo = (e) => {
        // prevent form from submitting to non-existant server
        e.preventDefault();
        // set time with moment.js before running addTodo function
        // run the "addTodo" function passed down from App in the following manner:
        // App --> TodoList --> TodoForm(execute function and it will "bubble back up" like the following:) Todoform --> TodoList --> App
        this.props.addTodo(this.state.inputText, moment().format('LLLL'), this.state.body);
        // Reset the value of this components state inputText back to blank
        this.setState({
            inputText: '',
            body: '',
            time: '',
        });
        // Using the ref I created on the input element and instantiated on line 10 in the constructor, I reset the input value (on the physical web page the user sees) back to blank
        this.input.current.value = '';
        this.textAreaRef.current.value = '';
    }

    render() {
        console.log()
        return (
            <form className="todo-form" onSubmit={this.addTodo}>
                <input 
                    ref={this.input} 
                    type="text" 
                    placeholder="...todo" 
                    onChange={this.inputText}
                    autoFocus
                    autoCapitalize="sentences"
                    required
                />
                <textarea 
                    rows="15" 
                    placeholder="Todo Details Here"
                    onChange={this.textAreaInput}
                    ref={this.textAreaRef}
                    required
                />
                <div className="buttons">
                    <button className="add-todo btn color-black">Add Todo </button>
                    <button className="remove-completed-todos btn color-white" type="reset">Clear Completed</button>
                </div>
            </form>
        )
    }
}
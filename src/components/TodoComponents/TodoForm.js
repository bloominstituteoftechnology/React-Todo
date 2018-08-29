import React from 'react';
import './TodoForm.css';

export default class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            inputText: ''
        }
    }
    
    inputText = (e) => {
        let currentInputText = e.target.value;
        this.setState({
            inputText: currentInputText
        });
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.inputText);
        this.setState({
            inputText: '',
        })
    }
    render() {
        return (
            <form className="todo-form" onSubmit={this.addTodo}>
                <input type="text" placeholder="...todo" onChange={this.inputText} />
                <button type="submit" >Add Todo</button>
                <button type="reset">Clear Completed</button>
            </form>
        )
    }
}
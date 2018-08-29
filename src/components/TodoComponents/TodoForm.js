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
        e.preventDefault();
        this.props.addTodo(this.state.inputText);
        this.setState({
            inputText: '',
        });
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
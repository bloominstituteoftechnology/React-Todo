import React from 'react';
import { tsParenthesizedType } from '@babel/types';

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state ={
            newTodo: "",
        }
    }

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        })
    };

    submitForm = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
        this.setState({
            newTodo:""
          })

    }


    render() {

    return(
        <form onSubmit={this.submitForm}>
            <input
            type = "text"
            name = "todo"
            onChange={this.handleChanges}
            value = {this.state.newTodo}
            />
            <button type ="submit">Add Todo</button>
            <button 
            type ="submit"
            onClick={this.props.deleteCompleted}
            >Clear Completed</button>
        </form>
    )
    }
    
}

export default TodoForm;


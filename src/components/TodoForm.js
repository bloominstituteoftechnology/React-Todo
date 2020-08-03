import React, { Component } from 'react'

export class TodoForm extends Component {

    constructor(){
        super();
        this.state={
            task:''
        }
    }

    onChange = e => this.setState({task:e.target.value})
    onSubmit = e => {
        const { addTodo } = this.props 
        e.preventDefault();
        addTodo(this.state.task);
        this.setState({
            task:''
        })
    }    

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                type='text'
                name='task'
                value={this.state.task}
                onChange={this.onChange}
                />
                <button>New Task</button>
            </form>
            
 
        )
    }
}

export default TodoForm

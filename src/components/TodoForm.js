import React from 'react';

// import Name from './Name'


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            input:'',
            name:''
        };
    }
    onChange = e => {
        this.setState({ input: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({
            input:''
        })
    }
    onNameChange = e => {
        this.setState({ name: e.target.value })
    }

    render(){
    return(
        <div>
            <h3>{this.state.name}'s Todo list:</h3>
            <form onSubmit={this.onSubmit}>
                <input 
                type='text'
                name='name'
                placeholder='Type your name'
                value={this.state.name}
                onChange={this.onNameChange}
                />
                <input
                type='text'
                name='todo'
                placeholder='Type your task'
                value={this.state.input} 
                onChange={this.onChange}
                />
                <button>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
                
            </form>
        </div>
    )
}
}
export default TodoForm;
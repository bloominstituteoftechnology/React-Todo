import React from 'react';

class TodoForm extends React.Component {
    constructor (){
        super();
        this.state = {
            newtask: ''
        }
    }

    handleChanges = e => {
        this.setState({
            newtask:e.target.value
        });
    };


    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newtask);
        this.setState({newtask:''})
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                name='newtask'
                value={this.state.newtask}
                onChange={this.handleChanges}
                />
                <button>Add</button>
                <button onClick={this.props.clearTask}>Clear Completed Tasks</button>
            </form>
        );
    }
}

export default TodoForm
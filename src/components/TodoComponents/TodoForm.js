import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }


    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.todoText)
        this.setState({
            todoText: ''
        })
    }

    clearCompleted = e => {
        e.preventDefault();
        
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="item" value={this.state.todoText} onChange={this.handleChanges} />
                <button>Add Todo</button>
                <button onClick={this.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;
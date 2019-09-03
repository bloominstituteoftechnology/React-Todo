import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
            <input onChange={this.props.handleChange}></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm
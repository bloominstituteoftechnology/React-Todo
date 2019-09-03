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
                <button onClick={this.props.handleClick}>Add Todo</button>
                <button onDoubleClick={this.props.handleDoubleClick}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm
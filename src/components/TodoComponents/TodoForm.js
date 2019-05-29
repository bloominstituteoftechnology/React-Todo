import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder="...todo"
                    value={this.props.value}
                    onChange={this.props.inputEvent}
                />
                <button onClick={this.props.addTodo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;
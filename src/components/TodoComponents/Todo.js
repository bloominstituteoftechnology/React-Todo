import React from 'react';

class Todo extends React.Component {
    render(props) {
        return (
            <div>{this.props.todo.task}</div>
        )
    }   
}

export default Todo;
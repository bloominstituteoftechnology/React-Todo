import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map( todo =>
                        <Todo
                            key={todo.id}
                            completed={todo.completed}
                            task={todo.task}
                            id={todo.id}
                            setCompleted={this.props.setCompleted}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoList;
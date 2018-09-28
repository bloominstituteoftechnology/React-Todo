import React from 'react';
import Todo from './Todo'

//map over array of todo objects and render a todo component showing the task

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map(
                todo => {
                    return (
                        <Todo 
                            key={todo.id} 
                            task={todo.task}
                            completed={todo.completed}
                            handleClick={this.props.handleClick}
                        />
                    )       
                }
            )}
            </div>
        )
    }
}

export default TodoList;
import React from 'react';
import Todo from './Todo';
class TodoList extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.todoList.filter((todo) => todo.task.toLowerCase().search(this.props.searchString.toLowerCase()) !== -1)
                    .map((todo) => {
                        return (<Todo
                            key={todo.id}
                            id={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                            completeTask={this.props.completeTask}
                        />);
                    })
                }
            </div>
        )
    }
}

export default TodoList;
import React from 'react';
import Todo from './Todo';
class TodoList extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.todoList.map((todo) => {
                        return <Todo id={todo.id} task={todo.task} completed={task.completed} />;
                    })
                }
            </div>
        )
    }
}

export default TodoList;
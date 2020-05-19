import Todo from './Todo';
import React from 'react'

class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.props.taskData.map((task) =>
                    <Todo task={task} key={task.id}/>
                )}
            </div>
        )
    }
}


export default TodoList;

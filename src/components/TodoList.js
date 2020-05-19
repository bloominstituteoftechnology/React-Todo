import Todo from './Todo';
import React from 'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

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

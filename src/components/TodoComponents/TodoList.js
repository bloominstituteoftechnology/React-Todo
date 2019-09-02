import React from 'react'
import Todo from './Todo'

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='todo-tasks'>
                {this.props.toDoItems.map(item => (
                    <Todo taskData={item} key={item.id}/>
                ))}
            </div>
        )
    }
}

export default ToDoList
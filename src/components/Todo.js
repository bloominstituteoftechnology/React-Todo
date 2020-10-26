import React from 'react'
import './Todo.css'

class Todo extends React.Component {

    onClick = (id) => {
        this.props.handleClick(id)
    }

    render() {
        return(
            <div>
                {this.props.tdList.map(task => {
                    return <p 
                    key={task.id}
                    onClick={() => this.onClick(task.id)}
                    className={task.completed ? 'crossout' : ''}
                    >{task.task}</p>
                })}
            </div>
        )
    }
}

export default Todo
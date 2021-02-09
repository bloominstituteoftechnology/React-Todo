import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    
    render() {
       
        return(
            <div>
                {this.props.todo.map(todo => (
                    <Todo todo={todo} handleToggle={this.props.handleToggle} />
                ))}
                <button onClick={this.props.handleCompleted}>Clear List</button>
            </div>
        )
    }
}

export default TodoList
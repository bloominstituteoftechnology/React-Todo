// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
    handleClick=()=>{
        this.props.handleTaskCompleted()
    }
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.todo.map(todo => (
                    // console.log(todo)
                    <Todo todo={todo} handleToggle={this.props.handleToggle} />
                ))}
                <button onClick={this.handleClick}>CLEAR</button>
            </div>
        )
    }
}

export default TodoList
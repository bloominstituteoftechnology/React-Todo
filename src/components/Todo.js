import React from 'react'

class Todo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div 
            onClick={() => this.props.toggleCompleted(this.props.todo)}
            className={this.props.todo.completed ? 'done' : ''}
            >
        
            <h3>{this.props.todo.task}</h3>
        </div>
        )
    }
}

export default Todo
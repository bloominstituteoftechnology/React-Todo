import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    render(){
        return (
            <div className="center">
            <div
                onClick={()=>this.props.toggleItem(this.props.item.id)}
                className={`todo ${this.props.item.completed? "yes" : ""}`}
            >
            {this.props.item.task}
            </div>
            </div>
            
        )
    }
}

export default Todo;
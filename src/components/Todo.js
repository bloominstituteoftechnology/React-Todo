import React, { Component } from 'react'

export class Todo extends Component {

    style = () => {
        return {
            textDecoration:this.props.todo.completed?'line-through':'none'
        };
      };

      
    render() {
        return (
            <div  style={this.style()}
            onClick={() => this.props.toggleItem(this.props.todo.id)}>
                <p>{this.props.todo.task}</p>                              
            </div>
        )
    }
}

export default Todo

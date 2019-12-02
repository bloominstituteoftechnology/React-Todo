import React, { useState } from 'react';


export default class Todo extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div>
        {this.props.tasks.map(todo => (
            <div className='todo-card' key={todo.id}>
                <a href='#' onClick={this.props.done}>
                    {todo.task}
                </a>
            </div>
        ))}
        </div>
      )
    }
}

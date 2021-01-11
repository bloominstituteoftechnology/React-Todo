import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }


    render() {
        return (
            <div className="todo" onClick={() => this.props.complete(this.props.todo.id)} >
                <h3   style={ this.props.todo.completed ? {color: 'red'} : {color: 'blue'}} >{this.props.todo.task}</h3>
            </div>
        )
    }
}
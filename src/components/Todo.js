import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo
        }
    }

    render() {
        return (
            this.state.todo.map((item, index) => <div key={item.id} id={item.id} onClick={() => {
                item.completed = !item.completed;
                item.strikeThrough(index);
            }}>{item.name}</div>)
        )
    }
}

export default Todo; 
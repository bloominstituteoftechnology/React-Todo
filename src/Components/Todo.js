import React, { Component } from 'react';

class Todo extends Component {
    constructor () {
        super();
        this.state = {
            completed: false
        };
    }

    completed = () => {
        this.setState({ completed: !this.state.completed });
    };

    render() {
        const style = this.state.completed
        ? { textDecoration: "line-through"}
        : { textDecoration: "none" };

        return (
            <div style={style} onClick={this.completed}>
            {this.props.todo}
            </div>
        );
    }
}

export default Todo;




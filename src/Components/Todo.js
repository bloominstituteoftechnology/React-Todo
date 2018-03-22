import React, { Component } from 'react';

class Todo extends Component {
    constructor () {
        super();
        this.state = {
            completed: false
        };
    }

    clickHandler = () => {
        this.setState({ completed: !this.state.completed });
    };

    render() {
        const styles = this.state.completed
        ? { textDecoration: "line-through"}
        : { textDecoration: "none" };

        return (
            <div style={styles} onClick={this.clickHandler}>
            {this.props.todo}
            </div>
        );
    }
}

export default Todo;




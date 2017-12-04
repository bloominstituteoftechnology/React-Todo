import React, { Component } from 'react';

class Todo extends Component {
    constructor(todo) {
        super();
        this.state = {
            todo: todo,
            clicked: false
        };
    }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through'} : { textDecoration: 'none' };
        return (
            <div style={styles} onClick={this.handleClick}>
        {this.props.todo}
      </div>
        );
    }
}
export default Todo;
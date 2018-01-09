import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            completed: false
        };
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    remove = () => {
        this.props.remove(this.props.index);
    }

    render() {
        const styles = this.state.clicked ? {textDecoration: 'none'} : {textDecoration: 'none'};
        return (
            <div style={styles} onClick={this.handleClick}>{this.props.todo}
            <button onClick={this.remove}> X </button>
            </div>
        );
    }
}

export default Todo;
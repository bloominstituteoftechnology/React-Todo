import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    };

    clicking=()=> {
        this.setState({ clicked: !this.state.clicked});
    };

    render() {
        const styles = this.state.clicked ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
        return (
            <div style={styles} onClick={this.clicking}>{this.props.todo}</div>
        );
    }
}

export default Todo;
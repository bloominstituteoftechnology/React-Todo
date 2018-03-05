import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        console.log('clicked')
    }


    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
            <div style={styles} onClick={this.handleClick}>{this.props.data}</div>
        );
    }
}

export default Todo;
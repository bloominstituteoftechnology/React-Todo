import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked}); // toggle when clicked
    }

    render() {
        // const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        let styles = { textDecoration: 'none' };

        if (this.state.clicked) {
            styles = { textDecoration: 'line-through' };

        }
        return (
            <div style={styles} onClick ={this.handleClick}>
                {this.props.todo}
            </div>
        );
    }
}

export default Todo;
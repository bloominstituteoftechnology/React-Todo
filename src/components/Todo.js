import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            // buttonText: 'Check'
        }
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked}); // toggle when clicked
    }

    render() {
        let styles = { textDecoration: 'none', float: 'left', width: '200px' }; // Default Style when added

        if (this.state.clicked) {
            styles = { textDecoration: 'line-through', float: 'left', width: '200px' }; // Put line through text
        }

        return (
                <div style={styles} onClick ={this.handleClick}>
                    {this.props.todo}
                </div>
        );
    }
}

export default Todo;
import React, { Component } from 'react';

class Todo extends Component {
    constructor(todo) {
        super();
        this.state = {
            todo,
            clicked:false
        };
    }
    
    handleClick = () => this.setState({clicked: !this.state.clicked});

    render() {
        const customStyle = this.state.clicked ? {textDecoration:'line-through'} : {textDecoration:'none'};
        return (
            <div style={customStyle} onClick={this.handleClick}>
                {this.props.todo}
            </div>
        );
    }
}

export default Todo;
import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <p onClick={this.props.strike}>{this.props.item}</p>
        )
    }
}

export default Todo

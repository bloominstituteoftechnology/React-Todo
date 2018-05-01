import React, { Component } from 'react';

class Todo extends Component { 
constructor(props) {
    super(props);
    this.state = {
        clicked: false
    }
}
click = () => {
    this.setState({
        clicked: !this.state.clicked
    })
}

render() {
return (
    <div style={this.state.clicked? { textDecoration: 'line-through' }: {textDecoration: 'none'}} onClick={this.click}>{this.props.todo}</div>
)}
}

export default Todo;
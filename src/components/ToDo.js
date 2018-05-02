import React, { Component } from 'react';
// import TodoList from "./components/TodoList";


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
            <div className="listElement" style={this.state.clicked ? { display: 'none' } : { textDecoration: 'none' }} onClick={this.click}>{this.props.todo}</div>
        )
    }
}


export default Todo;
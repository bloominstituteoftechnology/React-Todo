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
        console.log(this.props)
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
            <div className="listElement" key={this.state.clicked} style={this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} onClick={this.click}>{this.props.todo}</div>
        )
    }
}


export default Todo;
import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
    constructor(todo) {
        super();
        this.state = {
            todo: todo,
            clicked: false
        };
    }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    delete = () => {
        console.log('delete it');
    }

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through', textDecorationColor: '#9ad3de'} : { textDecoration: 'none' };
        return (
            <div>
            <button className="button" onClick={this.delete}>Delete</button>
            <div style={styles} onClick={this.handleClick} className="todoS">
        {this.props.todo}
      </div>
      </div>
        );
    }
}
export default Todo;
import React, { Component} from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        console.log(this.props);
        const styles = this.state.clicked ? {textDecoration : 'line-through'} : {textDecoration : 'none'};
        return (
            <div style={styles} onClick={this.handleClick}>{this.props.todo}</div>
        );
    }
}

export default class TodoList extends Component {
    removeItem(item) {
        this.props.deleteTodo(item);
    }
    render() {
        return(
            <ul>
                { this.props.todos.map((todo) => {
                    return <li onClick={() => { this.removeItem(todo)}} key={todo}>{ todo }</li>
                })}
            </ul>
        );
    }
}

//export default Todo;
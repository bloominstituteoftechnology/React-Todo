import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(todoItem) {
        super();
        this.state = {
            todoItem
        };
    }
    
    handleClick = () => {
        const todoItem = this.props.todoItem;
        todoItem.clicked = !todoItem.clicked;
        this.setState({todoItem:todoItem});
        this.props.updateStorage();
    }

    removeTodoItem = (event) => {
        this.props.removeTodoItem(event);
        this.props.updateStorage();
    }

    render() {
        const customStyle = this.props.todoItem.clicked ? {textDecoration:'line-through'} : {textDecoration:'none'};
        return (
            <div style={customStyle} onClick={this.handleClick} data-id={this.props.id}>
                {this.props.todoItem.title}
                {this.props.todoItem.message}
                <button onClick={this.removeTodoItem}>&times;</button>
            </div>
        );
    }
}

export default TodoItem;
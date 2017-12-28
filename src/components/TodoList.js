import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoList: window.localStorage.getItem('todoList') ? JSON.parse(window.localStorage.getItem('todoList')) : [],
            todoItem : {title:'',message:''}
        };
    }

    handleTodoInput = event => {       this.setState({todoItem:{'title':event.target.parentNode.title.value,'message':event.target.parentNode.message.value},todoList:this.state.todoList});
    };

    addTodoItem = event => {
        event.preventDefault();
        const todoList = this.state.todoList;
        todoList.push(this.state.todoItem);
        this.setState({
            todoList,
            todoItem : {title:'',message:''}
        });
        event.target.reset();
        window.localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    render() {
        return (
        <div>
            {this.state.todoList.map((todoItem, i) => <TodoItem key={i} title={todoItem.title} message={todoItem.message}/>)}
            <form onSubmit={this.addTodoItem}>
                <input name="title" placeholder="Add Todo Title" />
                <input name="message" placeholder="Add Todo Message" />
                <button onClick={this.handleTodoInput}>Add Todo Item</button>
            </form>
        </div>);
    }
}

export default TodoList;
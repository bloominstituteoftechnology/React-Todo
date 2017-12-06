import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoList: window.localStorage.getItem('todoList') ? JSON.parse(window.localStorage.getItem('todoList')) : [],
            todoItem : {title:'', message:'', clicked:false}
        };
    }

    handleTodoInput = event => {
        this.setState({todoItem:{'title':event.target.parentNode.title.value,'message':event.target.parentNode.message.value, 'clicked':false },todoList:this.state.todoList});
    };

    addTodoItem = event => {
        event.preventDefault();
        const todoList = this.state.todoList;
        if(this.state.todoItem.title.length === 0 || this.state.todoItem.message.length === 0) return;
        todoList.push(this.state.todoItem);
        this.setState({
            todoList,
            todoItem : {title:'', message:'', clicked:false}
        });
        event.target.reset();
        window.localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    removeTodoItem = event => {
        event.preventDefault();
        const eventId = event.target.parentNode.dataset.id;
        const result = this.state.todoList.filter((todo,i) => Number(eventId) !== i);
        this.setState({todoList:result});
        window.localStorage.setItem('todoList', JSON.stringify(result));
    }

    updateStorage = () => {
        window.localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
    }
    
    render() {
        return (
        <div>
            {this.state.todoList.map((todoItem, i) => <TodoItem key={i} id={i} todoItem={todoItem} removeTodoItem={this.removeTodoItem} updateStorage={this.updateStorage}/>)}
            <form onSubmit={this.addTodoItem}>
                <input name="title" placeholder="Add Todo Title" />
                <input name="message" placeholder="Add Todo Message" />
                <button onClick={this.handleTodoInput}>Add Todo Item</button>
            </form>
        </div>);
    }
}

export default TodoList;
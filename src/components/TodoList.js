import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo : '' // todo : {'title':'','message':''}
        };
    }

    handleTodoInput = event => {this.setState({todo:event.target.value})};

    addTodo = event => {
        event.preventDefault();
        const todoList = this.state.todos;
        todoList.push(this.state.newTodo);
        this.setState({
            todos:todoList,
            newTodo:''
        });
    }

    render() {
        return (
        <div>
            {this.state.todos.map((todo, i) => <Todo key={i} todo={todo} />)}
            <form onSubmit={this.addTodo}>
                <input onChange={this.handleTodoInput} placeholder="Add Todo" value={this.state.newTodo}/>
            </form>
        </div>);
    }
}

export default TodoList;
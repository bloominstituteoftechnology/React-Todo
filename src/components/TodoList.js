import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

        this.state={
            todos: [],
            newTodo: ''
        };
    } 
    handleTodoInput = (event) => {
        this.setState({newTodo: event.target.value})
    } 
    addTodo = (event) => {
        event.preventDefault();
        // const todoList = this.state.todos;

        this.setState({
            todos: [ ...this.state.todos, this.state.newTodo ],
            newTodo: ''
        })
    }
    render(){
        return(
            <div>
                {this.state.todos.map(todosItems => <Todo todo={todosItems}/>)}
                <form onSubmit={this.addTodo}>
                    <input type='text' 
                    onChange={this.handleTodoInput} 
                    placeholder='Tell me what you need to do' 
                    value={this.state.newTodo}/>
                </form>
            </div>
        )
    }
}

export default TodoList;
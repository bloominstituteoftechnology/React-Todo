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
    submitChanges = (event) => {
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
                {this.state.todos.map(todosItems => <Todo thing={todosItems}/>)}
                <form onSubmit={this.submitChanges}>
                    <input type='text' onChange={this.handleTodoInput} placeholder='Tell me what you need to do'/>
                </form>
            </div>
        )
    }
}

export default TodoList;
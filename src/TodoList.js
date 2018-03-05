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
    render(){
        return(
            <div>
                {this.state.todos.map(todosItems => <Todo thing={todosItems}/>)}
            </div>
        )
    }
}
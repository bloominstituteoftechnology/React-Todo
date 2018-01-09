import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        };
    }
   
    removeTodo = (event) => {
        const removeTodoList = this.state.todos;
        removeTodoList.splice(0, 1);
        this.setState({todos: removeTodoList});
    }

    addTodo = (event) => {
        event.preventDefault();
        const AddtodoList = this.state.todos;
        AddtodoList.push(this.state.newTodo);
        this.setState({
            todos: AddtodoList,
            newTodo: ''
        });
    }

    handleTodoInput = (event) => {
        this.setState({newTodo: event.target.value})
    }

    render() {
        return(
            <div>
             <form onSubmit={this.addTodo}>
              <input type='text' onChange={this.handleTodoInput} 
              placeholder="Add a new Todo!" 
              value= {this.state.newTodo}/>
                </form>
            <div>
              {this.state.todos.map((todo, i) => 
              <Todo key={i} index={i} todo={todo}
                remove={this.removeTodo.bind(this)}/>
                )}
               </div>
            </div>
        );
    }
}

export default TodoList;
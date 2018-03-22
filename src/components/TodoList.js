import React, {Component} from "react";
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [], //save
            newTodo: '', //add
        };
    }
    handleTodoInput = (event) => {
        this.setState({ newTodo: event.target.value}); //handling the typing   //event.target.value = new todo string as I'm typing
    }
    addTodo = (event) => {   //for submitting the form (when i'm clicking enter)
        event.preventDefault(); //so it doesn't reset
        const todosList = this.state.todos;
        todosList.push(this.state.newTodo);
        this.setState({  //updating the State, since we don't want to modify this.state directly
            newTodo: '',
            todos: todosList
        });
    }
    render(){
        return (
            <div> 
                {this.state.todos.map((todo, i) => <Todo key={i} todo= {todo} />)}
                <form onSubmit= {this.addTodo}>
                <input onChange= {this.handleTodoInput} placeholder= "Add new Todo" value = {this.state.newTodo} />
                </form>
                </div> 
        );

    }
}

export default TodoList;
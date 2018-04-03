import React, {Component} from "react";
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        let todos = JSON.parse(localStorage.getItem('todos')) || [] // since this is here, can erase empty brackets at line 10
        
        this.state = {
            todos, //save
            newTodo: '', //add
        };
    }
    handleTodoTyping = (event) => {
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
        
        localStorage.setItem('todos', JSON.stringify(todosList)) //want to actually store what we are adding
    }
    removeTodo = (index) => {
        let todos = this.state.todos;
        todos.splice(index, 1);
        this.setState({
            newTodo: '',
            todos: todos
        });

        localStorage.setItem("todos", JSON.stringify(todos));
    }

    render(){
        return <div class="textBox">
            {this.state.todos.map((todo, i) => (
              <Todo
                key={i} todo={todo}
                removeTodo={this.removeTodo}
                index={i}
              /> //gotta pass it down to Todo component
            ))}
            <form onSubmit={this.addTodo}>
              <input onChange={this.handleTodoTyping} placeholder="Add new Task!" value={this.state.newTodo} />
            </form>
          </div>; //makes x

    }
}

export default TodoList;
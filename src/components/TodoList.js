import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{
    constructor() {
      super();
      this.state = {
        todos: [], 
        newTodo: {text: '', completed: false},
      };
    }

    // loadLocalStorage() {
    //   return JSON.parse(window.localStorage.getItem('todos'));
    // }

    
    // saveLocalStorage = (stored) => {
    //     window.localStorage.setItem('todos', JSON.stringify(stored));
    // }

    handleTodoTaskInput = (event) => {
      this.setState({
        newTodo: {
        text: event.target.value,
        completed: false
        }
      });
    };
    
    // setState(newState) {
    //   super.setState(newState);
    //   this.saveLocalStorage(newState.todos);
    // }
  
    addTodo = (event) => {
      event.preventDefault();
      const todo = this.state.newTodo;
      const todos = this.state.todos; 
  //    newTaskList.push(this.state.newTodo);
      this.setState({
      //  todos: newTaskList,
        todos: [...todos, todo],
        newTodo: {text: '', completed: false}
        });

  //   this.saveLocalStorage();
    };

    deleteTodo(index) {
      return () => {
        this.setState({
          todos: this.state.todos.filter((todo, todoIndex) => {
            return todoIndex !== index;
          })
        })
      };
    }
  
    render(){
      return(
        <div> 
          {this.state.todos.map((todo,index) => <Todo key={index} todo={todo} delete={this.deleteTodo(index)}
            // remove={this.deleteTodo.bind(this)}
          />)}
          <form onSubmit = {this.addTodo} onChange={this.handleTodoTaskInput}>
            <input type="text" placeholder="Add a new Task" value={this.state.newTodo.text} />
            <input id="submit" type="submit" value="Add Todo" />
          </form>
        </div>
      );
    }
  }
  

  export default TodoList;



      // deleteTodo = (event) => {
    // const deleteTodoList  = this.state.todos;
    // deleteTodoList.splice(0, 1);
    // this.setState({
    //     todos: deleteTodoList
    // })

    

    // }
  
    // completedItem = (index) => {
    //     const newTaskList = this.state.todos;
    //     newTaskList[index].completed = !list
    // }


    // saveLocalStorage = () => {
    //     window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
    // }
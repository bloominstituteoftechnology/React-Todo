import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoCSS from './components/Todo.css';



const todo = [
    {
      task: 'Create Todo list',
      id: 12345,
      completed: false
    },
    {
      task: 'Learn setState()',
      id: 54321,
      completed: false
    },
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
      todo: todo
    }
  }


  //handle whether the completed for the todo is false or true when clicked on
   handleTodoToggle = (todoId)=>{
    this.setState({
      todo: this.state.todo.map(todo=>{
        if(todo.id === todoId){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return(todo);
      })
    })
  }


  //Will add to do to list when form is filled out
  handleAddTodo = (todoName) =>{
    const todo ={
      task: todoName,
      id: this.state.todo.length,
      completed: false
    }

    const newTodo = [...this.state.todo, todo];

    this.setState({
      todo: newTodo
    })
  }

  //Clear off the todos that were checked off
    handleClearCompleted = () =>{
      const newTodo = this.state.todo.filter(todo=>{
        return(!todo.completed);
      })
      this.setState({
        todo: newTodo
      })
    }

  
  
  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <TodoList toDoList={this.state.todo} handleTodoToggle={this.handleTodoToggle}  />
        <TodoForm handleAddTodo={this.handleAddTodo} handleClearCompleted={this.handleClearCompleted}/>
      </div>
    );
  }
}

export default App;

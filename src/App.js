import React from 'react';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';



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

  handleAddTodo = (todoName) =>{
    const todo ={
      task: todoName,
      id:this.state.todo.length,
      completed: false
    }

    const newTodo = [...this.state.todo, todo];

    this.setState({
      todo: newTodo
    })
  }

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

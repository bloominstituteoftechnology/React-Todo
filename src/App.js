import React, { Component }from 'react';
// import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const Todo = [{
  task: 'default Task',
  id: 1,
  done: false
}]

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your 
  constructor(){
    super();
     this.state = {
       todoList: Todo,
     }
  }

  //adds a new object to todoList array
  addNewTodo = param => {
    const newTodo = {
      task: param,
      id: 1,
      done: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
    });
  }

  //removes tasks that have toggled to completed
 removeCompletedTodo = () => {
   const notCompleted = this.state.todoLIst.filter(item => !item.done );
   this.setState({
     todoLIst: notCompleted,
   })

   //method allows user to toggle list items to True/False
   toggleTodo = paramId =>{
     const toggledTodo = this.state.todoList.map(item => item.id === paramId ? {...item, done: !item.done} : item );
     this.setState({
       todoLIst: toggledTodo,
     })
   }

 }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;

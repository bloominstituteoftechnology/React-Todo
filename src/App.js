import React from 'react';
import ToDoForm from "./components/TodoForm";
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }


  handleToDoAdd = (toDoName) => {
    console.log(toDoName);
    const toDo = {
      task: toDoName,
      id: Date.now(),
      completed: false
    };
    const newToDo = [...this.state.toDoList, toDo];

    this.setState({
      toDoList: newToDo
    });
    console.log(this.state.toDoList);
  };

  handleItemToggle = (toDoId)=> {
    this.setState({
      toDoList: this.state.toDoList.map(todo=>{
        if(toDoId === todo.id ) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return(todo);
      })
    })
  }




  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm handleToDoAdd={this.handleToDoAdd} />
        <TodoList handleItemToggle={this.handleItemToggle}toDoList={this.state.toDoList} />
      </div>
    );
  }
}

export default App;

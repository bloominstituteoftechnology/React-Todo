import React from 'react';
import TodoComponent from './components/TodoComponents/Todo'

const initialTodoList = [
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
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props){
    super(props)
    this.state = {
      todoList: initialTodoList,
      newTodo: "",
    }
  }
  changeHandler = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  enterHandler =  (e) => {
    if(e.key === "Enter"){
      this.addTodo()
    }
  }

  addTodo = () => {
    console.log("run")
  }

  clearCompleted = () => {
    
  }
  render() {
    return (
      <TodoComponent 
        newToDo={this.state.newTodo}
        toDoList={this.state.todoList}
        addTodo={this.addTodo}
        clearCompleted={this.clearCompleted}
        changeHandler={this.changeHandler}
        enterHandler={this.enterHandler}
      />
    );
  }
}

export default App;

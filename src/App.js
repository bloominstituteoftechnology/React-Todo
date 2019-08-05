import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"


const todoList = [
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

  constructor(){
    super();
    this.state = {
      todoListState: todoList,
    }
  }

  toggleStatus = (id) =>{
    this.setState({
      todoListState: this.state.todoListState.map( item =>{
        if(item.id===id){
          console.log(item);
          return{
            ...item,
            completed: !item.completed
          }
        }
        else{
          return item
        }
      })
    }
    )
  }

  handleClear =()=>{
    this.setState({
      todoListState: this.state.todoListState.filter(
        task => {
          return task.completed != true;
        }
      )
    })

  }
  handleSubmit = (taskName)=> {

    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todoListState: [...this.state.todoListState, newTask]
    })

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          handleSubmit={this.handleSubmit}
          handleClear = {this.handleClear}
        />
        <TodoList
          list={this.state.todoListState}
          toggleStatus={this.toggleStatus}
        />
      </div>
    );
  }
}

export default App;

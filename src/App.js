import React from 'react';

//Imported Components 
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todo = [
  {
  task: "Bake Cookes",
  id: 1,
  completed: false,
},
{
  task: "Clean Drum Equipment",
  id:2,
  completed: false,
}
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


//constructor for state
  constructor() {
    super();
    this.state ={ 
      todo: todo
    }
    // console.log()
}

  toggleCompleted = (itemId) => {
    // iterate through the todo array (this.state.todo) to toggle only the item in question
    const newTodo = this.state.todo.map(item => {
      if (itemId === item.id) {
        return{
          ...item,
          completed: !item.completed
        } 
      }
      else {
        return item; 
      }
    })

    //update "todo" state value in the new array
    this.setState({
      ...this.state,
      todo: newTodo
    })
  }

  //


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleCompleted={this.toggleCompleted} todo={this.state.todo}/>
        <TodoForm/>
      </div>
    );
  }
}

export default App;

import React from 'react';

//Imported Components 
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todo = [
  {
  task: "Bake Cookies",
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

  //add an item to the todo array

  addItem = (taskName, e) => {
    e.preventDefault();
      const newItem ={
        id: Date.now(),
        task: taskName,
        completed: false
      }

      this.setState({
        ...this.state,
        todo: [...this.state.todo, newItem]
      })

  }

  clearCompleted = () => {
   
    console.log('Item has been cleared from Todo List')
    // if item.completed is true, then filter it out of the this.state.todo array
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item => !item.completed)
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList  clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} todo={this.state.todo}/>
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;

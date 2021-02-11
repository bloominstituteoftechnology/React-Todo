import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

const initialTodo = [
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
    constructor () {
        super ();
        this.state = {
            todo: initialTodo,          //todo is the list of tasks that have been added
        }  
    }

    addTodo = (taskName) => {    
        const newTask={
            task: taskName,
            id: Date.now(),
            completed: false
        }
        
        this.setState({
            ...this.state, todo: [...this.state.todo, newTask]
        })
      
       
    }

  render() {
    return (
      <div>
        <h1>My To-do App!</h1>
        <TodoList todo={this.state.todo}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;

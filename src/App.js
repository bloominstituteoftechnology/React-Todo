import React from 'react';
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";

const toDoListData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Bake Cakes',
    id: 1528817084399,
    completed: false
  },
  {
    task: 'Organize Room',
    id: 1528817077236,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 1528817077243,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  

  constructor () {
    super();

    /*start by getting our data into state inside the constructor which is what gets run when we create a new 
    instance of any one of our class based components */ 
    this.state = {
      todos: toDoListData
    }

  }//end constructor

  filterCompleted = () => {

    this.setState({
      todos: this.state.todos.filter(todo => {
        
        if(todo.completed) {
          return false;
        }
        else {
          return true;
        }

    })

  });


}

  //use arrow function syntax so we don't have to worry about this.bind
  toggleCompleted = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
        if(id === todo.id) {
          return {...todo, completed: !todo.completed};
        }
        else {
          return todo;
        }

      })

    });

  }//end toggleCompleted

  addTodo = (task) => {
    this.setState ({
      todos: [...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })

  }

  render() {

    console.log (this.state);

    return (
      <div class = "main-div">

        <div class = "todo-div">

          <h2>My Todo List</h2>
          
          <TodoList toggleCompleted = {this.toggleCompleted} todos = {this.state.todos}/>         

        </div>

        <TodoForm filterCompleted = {this.filterCompleted} addTodo = {this.addTodo} />
        
      </div>
    );
  }
}

export default App;

import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      todos: [{
          task: 'Moon Shoes',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Guardians of the Galaxy Soundtrack',
          id: 1528817084359,
          completed: false
        },
        {
          task: 'Oxygen',
          id: 1528817084458,
          completed: false
        },
        {
          task: 'Space Ice Cream',
          id: 1528817084358,
          completed: false
        }
      ],
    };
  }

  handleChange = (event) => {
    this.setState({
       [event.target.name]: event.target.value
    });
  };

  clearComplete = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    console.log(todos);
    todos = todos.filter(item =>
      !item.completed)
    this.setState({todos})
  };


  toggle = (id) => {

    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState({
      todos
    });
  }



  addToDo = (event) => {
    event.preventDefault();
    let addToDo = this.state.todos.slice();
  
    addToDo.push({
      task: this.state.task,
      id: Date.now(),
      completed: false
    });
    this.setState({
      task: '',
      todos: addToDo,
    })

  }




  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return ( <
      div className = 'app-wrapper' > { /* render a todo form, and the todo list */ } <
      TodoForm value = {
        this.state.task
      }
      clearComplete = {
        this.clearComplete
      }
      addToDo = {
        this.addToDo
      }
      handleChange = {
        this.handleChange
      }
      /> <
      TodoList toggle = {
        this.toggle
      }
      
      todos = {
        this.state.todos
      }
      />

      <
      /div>
    );
  }
}

export default App;
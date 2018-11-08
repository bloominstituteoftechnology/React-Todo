import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';

import './components/TodoComponents/Todo.css';

let todoData = [
  {
    task: 'Organize Crime',
    id: 1528817077286,
    completed: false,
    display: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true,
    display: true
  },
  {
    task: 'Eat salad',
    id: 1528817084558,
    completed: false,
    display: true
  },
  {
    task: 'Throw up from stress (a little)',
    id: 1528817484358,
    completed: true,
    display: true
  },
  {
    task: 'Fluff Pillows',
    id: 1528817224358,
    completed: false,
    display: true
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoData,
      inputText: '',
      searchText: ''
    };
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = ev => {
    ev.preventDefault();
    // create a new array with:
    // 1 - all the old data in the old array (Hint: use the spread operator)
    // 2 - the new character from this.state.inputText
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.inputText, 
          id: Date.now(), 
          completed: false,
          display: true }
      ],
      inputText: ''
    });
  };

  removeTodo = ev => {
    ev.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos.filter(item =>
          item.completed === false
        )       
      ],
      inputText: ''
    });
  };

  toggleCompleted = event => {
    event.preventDefault();
       
    //Returns the outside Object of the ID of the item i click on 
    let taskToChange = this.state.todos.findIndex(item => {
      return item.id.toString() === event.target.attributes[0].value;
    })
    let newTodosList = this.state.todos;

    //toggle the completedness
    if (newTodosList[taskToChange].completed){
      newTodosList[taskToChange].completed = false;
    } else {
      newTodosList[taskToChange].completed = true;
    }

    this.setState({
      todos: newTodosList
    });
  };

  search = event => {
    
    
    
    this.setState({
      [event.target.name]: event.target.value,
      
    }, ()=> {
      let newTodosList = this.state.todos;
    newTodosList.forEach(item => {
      // item.display = true;
      if(!item.task.toLowerCase().includes(this.state.searchText.toLowerCase())){
        item.display = false;
      }
    })

    if(this.state.searchText === ""){
      newTodosList = newTodosList.map(item => {
        item.display = true;
        console.log(item.display);
        return item;
      })
    }
    this.setState({
      todos: newTodosList
    })
    })
  }

  render() {
    return (
      <div className='container'>
        <h1> To Do </h1>
        <TodoForm 
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          removeTodo={this.removeTodo}
        />
        <TodoSearch 
          search={this.search}
          searchText={this.state.searchText}
          handleChange={this.handleChange}
        />
        <TodoList 
          handleClick={this.handleClick}
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos} 
          
        />
      </div>
    );
  }
}

export default App;

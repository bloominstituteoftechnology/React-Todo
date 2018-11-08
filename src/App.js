import React from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoListSeed = [
  {
    task: 'Learn setState()',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Style my Todo List',
    id: Date.now() + 1,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoListSeed,
      inputText: '',
      id: Date.now(),
      completed: false
    }
  }

  componentDidMount() {
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    if(storedTodo) {
      this.setState({todoList: storedTodo})
    }
  }


  addTodo = event => {
    event.preventDefault();

    let newTodos = [...this.state.todoList,
      { task: this.state.inputText, id: Date.now(), completed: false}];
      localStorage.setItem('todo', JSON.stringify(newTodos));

      this.setState({
        todoList: [
          ...this.state.todoList,
          {task: this.state.inputText},
        ],
          inputText: '',
      })
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleCompleted = (event, boolean) => {
    console.log(event.target)
    event.target.classList.toggle('completed')
    this.setState({
      boolean: true  
    })
  }

  render() {
    return (
      <div>
        <TodoList 
          addTodo={this.addTodo}
          todoList={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
          todos={this.todoList}
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

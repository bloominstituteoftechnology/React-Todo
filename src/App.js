import React from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoListSeed = [
  {
    task: 'Learn setState()',
    id: "982347597",
    completed: "false",
    textDecoration: "none"
  },
  {
    task: 'Style my Todo List',
    id: "0897979876",
    completed: "false",
    textDecoration: "none"
  }
];

let nextId = Math.random() * 100;

const getNewId = () => {
  nextId += 1;
  return nextId;
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoListSeed,
      inputText: '',
      completed: "false",
      textDecoration: 'none',
    }
  }

  componentDidMount() {
    let storedTodo = JSON.parse(localStorage.getItem('todo'));
    if(storedTodo) {
      this.setState({todoList: storedTodo})
    }
  }

  addTodo = event => {
    event.preventDefault();

    let newTodos = [...this.state.todoList,
      { task: this.state.inputText, id: this.state.id , completed: "false", textDecoration: this.state.textDecoration}];
      localStorage.setItem('todo', JSON.stringify(newTodos));

      this.setState({
        todoList: [
          ...this.state.todoList,
          {task: this.state.inputText,
            textDecoration: "none",  key: this.state.id, id: getNewId()}
        ],
          inputText: '',
          id: this.state.id
      })
  };


  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  toggleCompleted = (id) => {
    // this.state.todoList.filter(todo => todo.task === event.target.innerText )
    // event.target.classList.toggle('completed')
    // this.setState({
    //   completed: true
    // })
    this.setState({
      todoList: this.state.todoList.map(todo => {
        {console.log(todo)}
        
        
        if (todo.id === id) {
          return {
            ...todo,
            completed: todo.completed === "false" || todo.completed === undefined ? "true" : "false",
            textDecoration: todo.textDecoration === "none" || todo.textDecoration === undefined ? "line-through"  : "none",
          };
        } else {
          return todo;
        }
      })
    })
  }

  

  removeCompleted = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(
        todo => todo.textDecoration === "none",
      )
    });
  }

  render() {
    return (
      <div className="main-container">
        <TodoList 
          todoList={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
          todos={this.todoList}
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;

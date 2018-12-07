import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      text: {
        todo: "",
        search: ""
      },
      todoData: []
    }
  }

  changeText = event => {
    this.setState({ text:{ [event.target.name]: event.target.value }})
  }

  // Adds Todo items to the DOM
  addToDo = event => {

    this.setState(prevState => {
      let todos = prevState.todoData.slice();
      todos.push({
        task: this.state.text.todo,
        id: Date.now(),
        completed: false,
        searched: false
      });

      return {
        text: {
          todo: "",
          search: ""
        }, 
        todoData: todos 
      };
    });
    
    event.preventDefault();
  }

  toggleComplete = (event) => {
    let todo = this.state.todoData.findIndex(p => p.id === Number(event.target.dataset.id));
    let temp = this.state.todoData;
    temp[todo].completed = !temp[todo].completed;
    this.setState({ todoData: temp });
  }

  clearCompleted = () => {
    let unfinished = this.state.todoData.filter(todo => !todo.completed);
    this.setState({ todoData: unfinished })
  }

  clearAll = () => {
    this.setState({ todoData: [] })
  }

  searchTodo = event => {
    event.preventDefault();

    // Filter out the Todo items that match the search field
    let result = this.state.todoData.filter(todo => todo.task.toLowerCase().includes(this.state.text.search.toLowerCase()));
    let temp = this.state.todoData;

    // Find each result in state and update the search bool to true
    result.forEach(todo => {
      todo.searched = true;
      temp[this.state.todoData.findIndex(p => p.id === todo.id)] = todo;
    });

    this.setState({ 
      text: {search: ""},
      todoData: temp 
    })
  }

  clearSearch = () => {
    let temp = this.state.todoData;
    temp.forEach(todo => todo.searched = false);
    this.setState({ todoData: temp });
  }

  render() {
    return (
      <div className="app-container">
        <h2>Make your very own ToDo List!</h2>
        <TodoList todos={this.state.todoData} toggle={this.toggleComplete} />
        <TodoForm 
          search={this.searchTodo} 
          clearSearch={this.clearSearch} 
          todo={this.changeText} 
          add={this.addToDo} 
          text={this.state.text} 
          clearAll={this.clearAll} 
          clear={this.clearCompleted} 
        />
      </div>
    );
  }
}

export default App;

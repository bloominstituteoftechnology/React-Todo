import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      taskTitle: ''
    }
  }

  async componentDidMount() {
    const todos = await localStorage.getItem('todos');
    const todoData = JSON.parse(todos);
    this.setState({
      todos: todoData || []
    })
  }

  handleChange = (event)=>{
    this.setState({
      taskTitle: event.target.value,
    })
  }

  updateList = async (e) => {
    e.preventDefault();
    const newTask = {
      task: this.state.taskTitle,
      id: Date.now(),
      completed: false,
    };
    if(this.state.todos.length === 0) {
      await this.setState({
  todos: [newTask]
})
    } else {
      await this.setState({
        todos: [...this.state.todos, newTask]
      })
    }
    await localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  handleSearch = (e) => {
    e.preventDefault();
    
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        formType='Search'
        // value={this.state.taskTitle}
        // handleChange = {this.handleChange}
        searchQuery = {this.handleSearch}
        />
        {this.state.todos ? <TodoList list={this.state.todos}/>:<p>No data available</p> }
        <TodoForm
        formType='Add Task'
        value={this.state.taskTitle}
        handleChange = {this.handleChange}
        updateList = {this.updateList}
        />
      </div>
    );
  }
}

export default App;

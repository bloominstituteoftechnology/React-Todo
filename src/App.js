import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';
import Search from './components/TodoComponents/Search';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      task: '',
      search: '',
      showSearch: false,
    }
  }

  componentWillMount() {
    // localStorage.removeItem('myToDoList');
    let myTodoList = JSON.parse(sessionStorage.getItem('myToDoList'));
    
    (myTodoList !== null)
      ? this.setState({todoList: myTodoList}) 
        : this.updateSession(this.state.todoList);
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  updateSession() {
    sessionStorage.setItem('myToDoList', JSON.stringify(this.state.todoList));
  }

  addTask = event => {
    event.preventDefault();
    if (this.state.task === '') return;
    this.setState((prevState) => {
      const todoList = [
        ...prevState.todoList,
        {
          task: prevState.task,
          id: Date.now(),
          completed: false
        }
      ];
      return {todoList, task: ''};
    }, () => this.updateSession());
  }

  toggleComplete = id => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
    }, () => this.updateSession())
  }

  clearCompleted = event => {
    event.preventDefault();

    this.setState({
      todoList: this.state.todoList.filter(item => item.completed !== true)
    }, () => this.updateSession());
  }

  searchClicked = () => {
    let showSearch = !this.state.showSearch;
    if (!showSearch) this.clearSearch();
    this.setState({showSearch});
  }
  
  filteredList = () => {
    let todoList = this.state.todoList.filter(todo => 
      todo.task.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    )
    return todoList;
  }

  clearSearch = () => {
    this.setState({search: '', showSearch: false});
  }
  
  render() {
    return (
      <div className="app-container">
        <Search 
          value={this.state.search}
          onChange={this.changeHandler}
          showSearch={this.state.showSearch}
          searchClicked={this.searchClicked}
        />
        <div className="container">
          <TodoForm 
            task={this.state.task}
            addTask={this.addTask}
            onChange={this.changeHandler}
            clear={this.clearCompleted}
            />
          <TodoList
            list={this.filteredList()} 
            toggle={this.toggleComplete}
            />
          <button onClick={this.clearCompleted} className="clear-btn">Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Search from './components/SearchComponent/Search';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks: [
        {
          task: 'Organize room',
          id: 12343536,
          completed: false
        },
        {
          task: 'Clean Kitchen',
          id: 35935933425,
          completed: false
        }
      ],
      todo: '',
      search: ''
    };
  }

  componentDidMount(){
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount(){
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage(){
    for (let key in this.state){
      if (localStorage.hasOwnProperty(key)){
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try{
          value = JSON.parse(value);
          this.setState({ [key]: value});
        } catch (e){
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage(){
    for (let key in this.state){
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  addTask = e => {
    e.preventDefault()
    const tasks = this.state.tasks.slice();
    if (this.state.todo !== ''){
    tasks.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ tasks, todo: ''});
  }
  };

  toggleCompleteTask = id => {
    let tasks = this.state.tasks.slice();
    tasks = tasks.map(task =>{
      if (task.id === id){
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    this.setState({tasks})
  }

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  clearCompleted = e => {
    e.preventDefault();
    let tasks = this.state.tasks.slice();
    tasks = tasks.filter(task => !task.completed);
    this.setState({tasks})
  };

  updateSearch = (e) => {
    this.setState({search: e.target.value.substr(0,20)});
  }

  render() {
    return (
      <div className="app-container">
        <h1> Todo List: MVP</h1>
        <Search value={this.state.search} updateSearch = {this.updateSearch}/>
        <TodoList search={this.state.search} tasks={this.state.tasks} toggleCompleteTask={this.toggleCompleteTask}/>
        <TodoForm
          value={this.state.todo}
          handleTodoChange = {this.changeTodo}
          addTask={this.addTask} clearCompleted = {this.clearCompleted}/>
      </div>
    );
  }
}

export default App;

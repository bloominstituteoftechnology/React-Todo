import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import './components/TodoComponents/Todo.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          input: '',
          todo: [
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
          ],
          searchInput: '',
          searchStorage: [],
      };
  }

  markComplete = item => {
      this.setState((prevState) => {
          const newTodo = prevState.todo;
          newTodo.forEach(x => {
              if(x.id === item.id) x.completed = !x.completed;
          });
          return {
              todo: newTodo,
          }
      });
  }

  handleChange = e => {
      this.setState({
          input: e.target.value,
      });
  }

  addTodo = (e) => {
      if (e.keyCode === 13) e.preventDefault();
      if (!this.state.input){
          alert('Please Enter a Todo');
          return;
      }
      this.setState((prevState) => ({
          input: '',
          todo: prevState.todo.concat(
              {
                  task: prevState.input, 
                  id: Date.now(), 
                  completed: false
              }),
          })
      );
  }

  clearComplete = () => {
      this.setState((prevState) => ({
          todo: prevState.todo.filter(x => !x.completed),
      }));
  }
  componentDidMount(){
    window.addEventListener('beforeunload', this.handleLocalStorage);
    this.setState({
      input: JSON.parse(localStorage.getItem('input')) || '',
      todo: JSON.parse(localStorage.getItem('todo')) || [
        {task: 'Start todo list', id: Date.now(), completed: false}
      ],
    });
  }
  
  handleLocalStorage = () => {
    for (let key in this.state){
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  componentWillUnmount(){
    window.removeEventListener('beforeunload', this.handleLocalStorage);
  }

  handleSearch = () => {
      this.setState((prevState) => {
        if (!prevState.searchInput){
            return {
                todo: prevState.todo.concat(prevState.searchStorage).sort((a, b) => a.id - b.id),
                searchStorage: [],
            };
        }
          const matchingTodo = prevState.todo.filter(x => new RegExp(prevState.searchInput, 'gi')
          .test(x.task));
          const matchingStored = prevState.searchStorage.filter(x => new RegExp(prevState.searchInput, 'gi')
          .test(x.task));
          const matching = matchingTodo.concat(matchingStored).sort((a, b) => a.id - b.id);
          const notMatchingTodo = prevState.todo.filter(x => !new RegExp(prevState.searchInput, 'gi')
          .test(x.task));
          const notMatchingStored = prevState.searchStorage.filter(x => !new RegExp(prevState.searchInput, 'gi')
          .test(x.task));
          const notMatching = notMatchingTodo.concat(notMatchingStored);
      
        return {
            todo: matching,
            searchStorage: notMatching,
        };
        });
  }

  handleSearchChange = e => {
      this.setState({
          searchInput: e.target.value,
      }, this.handleSearch);
  }

  clearAllAndCache = () => {
    let msg = window.confirm('This will clear all current and stored todos, as well as local storage of todos.  Do you want to proceed?');
    if (msg) {
        this.setState({
            todo: [],
            searchStorage: [],
        }, () => localStorage.clear());
    } else return;
  }

  render(){
      return (
          <div>
              <TodoForm handleChange={this.handleChange}
                  addTodo={this.addTodo}
                  input={this.state.input}
                  clearComplete={this.clearComplete}
                  searchInput={this.state.searchInput}
                  onSearchChange={this.handleSearchChange}
                  clearAll={this.clearAllAndCache}
              />
              <TodoList list={this.state.todo} 
                  markComplete={this.markComplete}
              />
              <div className='key'>
                  <div>
                      <div className='complete'></div>
                      <span>= Complete</span>
                  </div>
                  <div>
                      <div className='incomplete'></div>
                      <span>= Incomplete </span>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;

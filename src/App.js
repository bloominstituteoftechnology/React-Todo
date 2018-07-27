import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './palette.css';
import './App.css';
import TodoActions from './components/TodoComponents/TodoActions';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    newListInput: '',
    todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false,
        listID: 1528817077286
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: true,
        listID: 1528817077286
      },
      {
        task: 'Build Garage',
        id: 1528817077285,
        completed: false,
        listID: 1528817084358
      },
      {
        task: 'Learn react',
        id: 1528817084359,
        completed: true,
        listID: 1528817084358
      }
    ],
    lists: [
      {
        id: 1528817077286,
        input: '',
        title: 'List I'
      },
      {
        id: 1528817084358,
        input: '',
        title: 'List II'
      }
    ],
    filter: 'all'
  };

  updateLocalStorage = () => {
    const state = JSON.stringify({
      lists: this.state.lists,
      todos: this.state.todos
    });
    localStorage.setItem('todos-state', state);
  };

  addTodo = (text, listID) => {
    this.setState(
      prevState => ({
        todos: [
          ...prevState.todos,
          {
            id: Date.now(),
            task: text,
            completed: false,
            listID: listID
          }
        ],
        lists: prevState.lists.map(
          list => (list.id === listID ? { ...list, input: '' } : list)
        )
      }),
      this.updateLocalStorage
    );
  };

  toggleTodo = id =>
    this.setState(
      prevState => ({
        todos: prevState.todos.map(todo => {
          if (todo.id !== id) return todo;
          return { ...todo, completed: !todo.completed };
        })
      }),
      this.updateLocalStorage
    );

  removeCompleted = () =>
    this.setState(
      prevState => ({
        todos: prevState.todos.filter(todo => !todo.completed)
      }),
      this.updateLocalStorage
    );

  removeAll = () => this.setState({ todos: [] }, this.updateLocalStorage);

  setFilter = filter => this.setState({ filter });

  handleListSubmit = () => {
    this.setState(prevState => ({
      lists: [
        ...prevState.lists,
        { id: Date.now(), input: '', title: prevState.newListInput }
      ],
      newListInput: ''
    }));
  };

  handleSubmit = id => () => {
    const input = this.state.lists.find(list => list.id === id).input;
    if (input.trim() === '') return;
    this.addTodo(input, id);
  };

  handleListChange = listName => {
    this.setState({
      newListInput: listName
    });
  };

  handleChange = id => input => {
    this.setState(prevState => ({
      lists: prevState.lists.map(
        list => (list.id === id ? { ...list, input } : list)
      )
    }));
  };

  componentDidMount() {
    const state = JSON.parse(localStorage.getItem('todos-state')) || {
      lists: [],
      todos: []
    };
    this.setState(state);
  }

  render() {
    return (
      <div className="App__container primary-text-color">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="./Working-it.mp4" type="video/mp4" />
            <source src="./Working-it.webm" type="video/webm" /> Your browser is
            not supported!
          </video>
        </div>
        <h1 className="App__title">React Todo List</h1>

        <div className="App__lists-container">
          {this.state.lists.map(list => (
            <div key={list.id}>
              <TodoList
                list={this.state.todos.filter(todo => todo.listID === list.id)}
                title={list.title}
                toggler={this.toggleTodo}
                filter={this.state.filter}
                handleSubmit={this.handleSubmit(list.id)}
                handleChange={this.handleChange(list.id)}
                input={list.input}
              />
            </div>
          ))}

          <div>
            <TodoForm
              onSubmit={this.handleListSubmit}
              onChange={this.handleListChange}
              value={this.state.newListInput}
              placeholderText="Add new list"
            />
          </div>
        </div>

        <TodoActions
          removeCompleted={this.removeCompleted}
          removeAll={this.removeAll}
          filter={this.state.filter}
          setFilter={this.setFilter}
        />
      </div>
    );
  }
}

export default App;

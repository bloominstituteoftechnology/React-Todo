import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './palette.css';
import './App.css';
import TodoActions from './components/TodoComponents/TodoActions';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    input: '',
    todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: true
      }
    ],
    filter: 'all'
  };

  addTodo = text =>
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          id: Date.now(),
          task: text,
          completed: false
        }
      ],
      input: ''
    }));

  toggleTodo = id =>
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id !== id) return todo;
        return { ...todo, completed: !todo.completed };
      })
    }));

  removeCompleted = () =>
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => !todo.completed)
    }));

  removeAll = () => this.setState({ todos: [] });

  setFilter = filter => this.setState({ filter });

  handleSubmit = () => this.addTodo(this.state.input);

  handleChange = event => {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  };

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
        <TodoList
          list={this.state.todos}
          toggler={this.toggleTodo}
          filter={this.state.filter}
        />
        <TodoForm
          onSumbit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.input}
        />
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

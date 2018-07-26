import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: 'Learn React',
          id: 2049,
          completed: false
        }
      ],
      input: '',
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  addTodo = (e) => {
    console.log('Hello', <TodoForm />)
    let list = this.state.list.slice();
    let value = e.target.firstChild.value;
    list.push({
      task: value,
      id: 2049 + Math.random(),
      completed: false
    });
    this.setState({ list: list, input: '' });
    e.preventDefault();
  }

  crossTodo = (e) => {
    e.target.classList.toggle('crossOut');
    let list = this.state.list.slice();
    let crossItem = list.filter(item => item.task === e.target.textContent);
    crossItem.forEach(item => item.completed = true);
    this.setState({ list: list });
  }

  clearCompletedTodos = (e) => {
    let list = this.state.list.slice();
    let newList = list.filter(item => item.completed !== true);
    this.setState({ list: newList });
  }

  render() {
    return (
      <div className="main-container">
        <h1>Let's Add Some ToDo Items!</h1>
        <TodoForm 
          addMe={this.addTodo} 
          clearMe={this.clearCompletedTodos} 
          inputValue={this.state.input}  
          inputChange={this.handleChange} 
        />
        {this.state.list.map(item => <TodoList key={item.id} itemProp={item.task} crossItem={this.crossTodo} />)}
      </div>
    )
  }
}

export default App;

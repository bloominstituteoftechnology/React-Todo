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
          task: 'Nothing To Do 😃',
          id: 2049,
          completed: false
        }
      ],
      input: '',
      headingQuote: [
        'Make Today Count',
        'Succeed on Purpose',
        'Defy Your Limitations',
        'Strive For Progress',
        'Creativity Takes Courage',
        'If Not Now, When?',
        'Be The Best You',
        'Believe. Achieve. Succeed.',
        'Follow Your Bliss'
      ]
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  addTodo = (e) => {
    let list = this.state.list.slice();
    let quotes = this.state.headingQuote.slice();
    let length = quotes.length;
    let mixedQuotes = [];

    if (list[0].id === 2049) {
      list.length = 0;
      this.setState({ list: list });
    }

    list.push({
      task: this.state.input,
      id: 2049 + Math.random(),
      completed: false
    });

    for (let i = 0; i < length; i++) {
      const pick = Math.floor(Math.random() * (quotes.length));
      mixedQuotes.push(quotes.splice(pick, 1));
    }

    this.setState({ list: list, input: '', headingQuote: mixedQuotes });
    e.preventDefault();
  }
 
  crossTodo = (e) => {
    let list = this.state.list.slice();
    if (list[0].id !== 2049) {
      let crossItem = list.filter(item => item.task === e.target.textContent);
      if (crossItem[0].completed === true) {
        crossItem.forEach(item => item.completed = false);
      } else if (crossItem[0].completed === false) {
        crossItem.forEach(item => item.completed = true);
      }
    }
    this.setState({ list: list });
  }

  clearCompletedTodos = (e) => {
    let list = this.state.list.slice();
    let newList = list.filter(item => item.completed !== true);
    if (newList.length === 0) {
      newList.push({
        task: 'Nothing To Do 😃',
        id: 2049,
        completed: false
      });
      this.setState({ list: newList });
    }
    this.setState({ list: newList });
  }

  render() {
    return (
      <div className="main-container">
        <h1>{this.state.headingQuote[0]}</h1>
        <TodoForm 
          addTodo={this.addTodo} 
          clearCompletedTodos={this.clearCompletedTodos} 
          value={this.state.input} 
          handleChange={this.handleChange} 
        />
        <div className="todo-list-container">
        {this.state.list.map(item => <TodoList 
          className={item.completed ? 'crossOut' : false}
          key={item.id} 
          inputValue={item.task} 
          crossTodo={this.crossTodo} 
        />)}
        </div>
      </div>
    )
  }
}


export default App;
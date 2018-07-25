import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: 'Learn React',
          id: 1979,
          completed: false
        }
      ]
    } 
  }

  addTodo = (e) => {
    const list = this.state.list.slice();
    let value = e.target.firstChild.value;
    list.push({
      task: value,
      id: 2049 + Math.random(),
      completed: false
    });
    this.setState({ list: list });
    e.target.firstChild.value = '';
    e.preventDefault();
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => <TodoList key={item.id} itemProp={item.task} />)}
        <TodoForm addMe={this.addTodo} />
      </div>
    )
  }
}

export default App;

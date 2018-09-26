import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      todos: [
        {
          task: 'warm up',
          id: 1,
          completed: false
        },
        {
          task: 'run',
          id: 2,
          completed: false
        },
        {
          task: 'sprint',
          id: 3,
          completed: false
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

render() {
  let list = this.state.todos.map((todo) => {
    return <li key={todo.id}> {todo.task}</li>
  })
  return (
    <div className='App'>
      <ul>
        {list}
      </ul>>
      <form>
        To do:
        <input type='text' name='task' onChange={this.handleChange} value={this.state.text} />
      </form>
    </div>
  );
}
}

export default App;


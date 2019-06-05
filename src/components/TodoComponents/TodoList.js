import React from 'react';
import Todo from './Todo'

const toDoArray = [{
  task: 'Wake up!',
  id: 1,
  completed: false
}];
const newId = Date.now();

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: toDoArray,
      task: '',
      id: { newId },
      completed: false
    }
    { console.log(this.state.list) }
  };
  

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  submitHandler = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };

    this.setState({
      toDoArray: [...this.state.toDoArray, newTask]
    });
    toDoArray.push(newTask);
  };

  render() {
    return (
      <div>
        <div className='todoList'>
          {this.state.toDoArray.map((item, index) => {
            return <Todo item={item} key={index} />
          })
          };
        </div>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            value={this.state.task}
            onChange={this.changeHandler}
            placeholder='New Task'
            name='task'
          />
          <button type='submit'>Add Task</button>
        </form>
      </div>
    )
  }
}

export default TodoList;
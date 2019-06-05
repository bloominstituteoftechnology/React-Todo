import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

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
      toDoArray: [...this.state.list, newTask]
    });
    toDoArray.push(newTask);
  };

  render() {
    return (
      <div>
        <div className='todoList'>
          {this.state.list.map((item, index) => {
            return <Todo item={item} key={index} />
          })
          }
        </div>
        <TodoForm submitHandler={this.submitHandler} stateTask={this.state.task} changeHandler={this.changeHandler} />
      </div>
    )
  }
}

export default TodoList;
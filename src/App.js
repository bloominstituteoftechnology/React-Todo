import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      todoData: [],
      newTask: '',
    }
  }

changeHandler = event => {
  this.setState({ [event.target.name]: event.target.value });
};

strikeThrough = index => {
  this.setState({
    todoData: this.state.todoData.map((item, indx) => {
      if(index !== indx) {
        return item;
      } else {
        return {
          ...item,
          textDecoration: item.textDecoration === 'none' ? 'strikeThrough' : 'none',
          completed: item.completed === false ? true : false
        };
      }
    })
  })
}

clearCompleted = event => {
  event.preventDefault();
  this.setState({
    todoData: this.state.todoData.filter(item => item.completed === false)
  })
}


addNewTodo = event => {
  event.preventDefault();
  this.setState({
    todoData: [
      ...this.state.todoData,
      { task : this.state.newTask, id: Date.now(), completed: false, textDecoration: 'none'}
    ],
    newTask: ''
  });
};
//id: Math.floor(Math.random()*1000000)


  render() {
    return (
      <div>
        <h2>To-do List:</h2>
        <TodoForm
          todoData={this.state.todoData}
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          newTask={this.state.newTask}
          clearCompleted={this.clearCompleted}
          strikeThrough={this.strikeThrough}
          />
      </div>
    );
  }
}

export default App;

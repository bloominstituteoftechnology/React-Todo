import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoData: [
        {
          task: 'Learn React',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Practice JS',
          id: 1528817084358,
          completed: false
        }
      ],
      inputText: '',
      newTodo: '',
      newId: Date.now(),
      completed: false,
    }
  }

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      TodoData: [
        ...this.state.TodoData,
        { task: this.state.newTodo, id: this.state.newId , completed: this.state.completed }
      ],
      newTodo: ''
    });
  };

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  onClickToggle = event => {
    this.setState({ completed: !event.state.TodoData.completed })
  }


  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList 
          todoData={this.state.TodoData}
        />
        <TodoForm 
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          inputText={this.state.inputText}
          todoData={this.state.TodoData}
          newTodo={this.state.newTodo}
          onClickToggle={this.onClickToggle}
        />
      </div>
    );
  }
}

export default App;

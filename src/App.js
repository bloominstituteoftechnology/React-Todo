import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

  const listData = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      itemList: listData,
      inputText: '',
    }
  }

  handleChange = ev =>{
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  addTodo = ev =>{
    ev.preventDefault();

    this.setState({
      itemList:[
        ...this.state.itemList,
        {task: this.state.inputText, id:Date.now(), completed:false,}
      ],
      inputText: '',
    });
  };


  render() {
    return (
      <div className="App">
      <h1>Todo List</h1>
        <TodoList itemList={this.state.itemList} />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  };
}

export default App;

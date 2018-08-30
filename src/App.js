import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: [],
      item: '',
      id: Date.now(),
      completed: false,
    }
  }

  click = id => {
    let newTodos = [...this.state.todo];
    newTodos = newTodos.map(todo =>{
      if(todo.id===id){
        todo.completed=!todo.completed;
        return todo;
      }
      else{
        return todo
      }
    })
    this.setState({newTodos})
  }


  clear = event =>{
    event.preventDefault();

  }





  addTodo = event => {
    event.preventDefault();
    if (this.state.item) {
      this.setState({
        todo: [...this.state.todo, { item:this.state.item, id:this.state.id, completed:this.state.completed}],
        item: '',
      });
    };
  }

  handleInput = event => {
    this.setState({
      item: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>ToDo List: MVP</h2>
        <TodoList todo={this.state.todo} />
        <TodoForm
          addTodo={this.addTodo}
          item={this.state.item}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;

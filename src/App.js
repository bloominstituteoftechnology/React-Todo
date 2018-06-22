import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    // step 2. call your `constructor`
    super(); // needs to be a class because it holds onto state.
    this.state = {
      greeting: "This should've been called a grocery list so we didn't have all these todos:)",
      todos: [
        {
          task: 'Finish Lambda',
          id: Math.random(),
          completed: false
        }
      ],
      todo: ''
    };
    // state is the memory we have in our component,
    // props is the mechanism for passing that state around.
    // Not-so OLD WAY of binding our handlers // this.alertBandNameHandler = this.alertBandNameHandler.bind(this);
  }
changedInput = event => this.setState (
  {[event.target.name]:event.target.value})

  addTodo = event => {
    event.preventDefault()
    const todos = this.state.todos.slice(); //makes copy of state
    // const todos = [...todos] //another way to make a copy
    todos.push({ task: this.state.todo, id: Math.random(), completed: false });
    this.setState({ todos, todo: '' }); // find this property on state and replace with new todo pushed in
    // todos: todos replacing state and adding new todo to it
    // todo: '' clears it so you can put another input
  };
  render() {
    return (
      <div>
        <h2>{this.state.greeting}</h2>
        <TodoList
        todos={this.state.todos}
        />
         <TodoForm
         todo={this.state.todo}
         addTodo={this.addTodo}
         changedInput={this.changedInput}/>
      </div>
    );
  }
}

export default App;

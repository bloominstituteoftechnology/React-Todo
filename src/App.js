import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props)

    this.state = {
    tasks:  [
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
      ]
    }



  }

isComplete = (id) => {
 this.setState({
  ...this.state,
  tasks: this.state.tasks.map((e) => {
    if(e.id === id) {
      return {
        ...e,
        completed: !e.completed
      };

    } else {
      return e
    }
  })
})}

newTodos = (text) => {
this.setState({

  tasks:  [...this.state.tasks, {
    task: text,
    id:   Math.floor(Math.random() * (0 - 100)) + 100,
    completed: false
  }]


})


}





clearTodos = () => {
  this.setState({tasks: []})
}





  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} complete={this.isComplete} />
        <TodoForm clear={this.clearTodos} newTodo={this.newTodos} />

      </div>
    );
  };
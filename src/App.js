import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
      this.state = {
        greeting: "Todo List: MVP",
        things: [
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
        ],
        thing: ""
      };
}

  changeTaskHandler = event => {
   this.setState({thing: event.target.value});
  };

  addTask = event => {
    event.preventDefault();
    const things = this.state.things.slice();
    things.push({ task : this.state.thing, id : Math.random(), completed : false });
    this.setState({ things , thing: ""});
  };

  toggleTask = id => {
    let things = this.state.things.slice();
    things = things.map(thing => {
      if(thing.id===id) {
        thing.completed = !thing.completed;
        return thing;
      }
      else {
      return thing;
      }
    });
  this.setState({things});
};

  clearCompleted = event => {
    event.preventDefault();
    let things = this.state.things.slice();
    things = things.filter(thing => !thing.completed);
    this.setState({things});
  }

  render() { //invoked anytime state is updated
    console.log("render called");
    return (
      <div>
        <h2>{this.state.greeting}</h2>
         <TodoForm 
         value = {this.state.thing}
         eventHandler = {this.changeTaskHandler}          
         addTaskEvent = {this.addTask}
         clear = {this.clearCompleted}
         />
        <TodoList 
        things = {this.state.things}
        taskToggler = {this.toggleTask}
        />       
      </div>
    );
  }
}

export default App;



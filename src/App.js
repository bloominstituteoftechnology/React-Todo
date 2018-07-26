import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';


const todos  = [
  {
    task: 'Fold Laundry',
  },
  {
    task: 'Wash Car',
  }
];

const listGenerator = props => {
  return <div>{props.listItem}</div>
}

const ListItem = props => {
  const {task, id} = props.listProp;
  return(
    <div>
      <h4>task: {task}</h4>
    </div>
  );
};


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        thingsToDo: [],
        temp: '',
      };
    }

    addItem = event => {
      event.preventDefault();
      const todos = this.state.todos.slice();
      todos.push({task: this.state.todo });
      this.setState({todos, todo: ''});
    };

    handleChange = event => {
      console.log(event.target.value);
      this.setState({temp: event.target.value}
      );
    };


 
  render() {
    return (
      <div>
       
        <h1> To-do List</h1>

        <p> {this.state.thingsToDo}</p>

        <input type="text" value = {this.state.temp} onChange = {this.handleChange} />
      </div>  
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';


const todos  = [
  {
    task: 'Fold Laundry',
    id: 1,
  },
  {
    task: 'Wash Car',
    id: 2,
  }
];

const listGenerator = props => {
  return <div>{props.listItem}</div>
}

const ListItem = props => {
  const {task, id} = props.listProp;
  return(
    <div>
      <h4>Item: {task}</h4>
      <h4>ID: {id}</h4>
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
        list: "",
        todos: todos,
      };
    }

    handleUpdateState = () => {
      const todos = this.state.todos.slice();
      this.setState({todos: todos});
    };

    handleInputChange = event => {
      console.log(event.target.value);
      this.setState({list: event.target.value });
    };
 
  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
       <div>{this.state.list}</div>
       {this.state.todos.map(todo =><ListItem listProp = {todo}   />)}
        <button onClick = {this.handleUpdateState}>Click to add item</button>
        <button>Clear Completed</button>
        <input placeholder = "enter" onChange = {this.handleInputChange} />
      </div>  
    );
  }
}

export default App;

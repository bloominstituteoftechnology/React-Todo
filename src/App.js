import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';



//================= My array ====================
const myTasks = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  }
];


const TodoList = props => {
  console.log();
  return <div>{props.toDoListProp.map(todo => <Todo toDoProp={todo} />)}</div>;
}

const Todo = props => {
  const { task } = props.toDoProp
  return (
    <div>
      <span> {task} </span>
    </div>
  );
}



class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todos: myTasks
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList toDoListProp= {this.state.todos}/>
        <TodoForm />
      </div>
    );
  }
}



export default App;

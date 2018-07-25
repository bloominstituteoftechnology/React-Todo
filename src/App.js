import React from 'react';


const myArr = [
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

const TodoList = props => {
  return <div>{props.toDoListProp.map(todo => <Todo toDoProp={todo} />)}</div>;
}

const Todo = props => {
  const { task } = props.toDoProp
  return (
    <div>
      <h4>Task: {task}</h4>
    </div>);
}


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: myArr
    };
  }

  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDoListProp={this.state.todos}/>
      </div>
    );
  }
}

export default App;

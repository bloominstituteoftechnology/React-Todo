import React from 'react';
import todo from './components/TodoComponents/Todo';
//import TodoForm from './components/TodoComponents/TodoForm'


// const Task = props => {
//   const { task } = props.taskProp;
//   return (
//     <div>
//       <h5> {task} </h5>
//     </div>
//   );
// };


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Todo List: MVP",
      tasks: todo,
      updatedTasks: " "
    };
  }

  handleUpdateState = () => {
    const tasks = this.state.tasks.slice();
    //this clones our tasks array
    tasks.push ({
      updatedTasks: "" //i want to push our new task into the tasks array
    });

    this.setState({ tasks: tasks });
    //from react api - the only way to change state

  };

  handleInputChange = event => {
    //update updatedTasks on state
    this.setState({ updatedTasks: event.target.value });
  };
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        {this.state.tasks.map(myTask => {
          return (<div key={myTask.task}>{myTask.task}</div>)
        })}
        {/* // <Task taskProp= {task} />)} */}
        <div>{this.state.updatedTasks} </div>
        {/* <TodoForm /> this does not work when i try to import from TodoForm*/}
        <input type="text" placeholder="...to do" onChange={this.handleInputChange} />
        <button onClick={this.handleUpdateState}>Add ToDo</button>
        <button>Clear Completed </button>
      </div>
    );
  }
}

export default App;

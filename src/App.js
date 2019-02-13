import React from 'react';
import todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm'


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
    // //this clones our tasks array
    // tasks.push ({
    //   updatedTasks: "" //i want to push our new task into the tasks array
    // });

    this.setState({ tasks: [...this.state.tasks, {task:this.state.updatedTasks, id:Date.now(), completed:false }] });
    //from react api - the only way to change state

  };

  handleInputChange = event => {
    //update updatedTasks on state
    this.setState({ updatedTasks: event.target.value });
  };
  
  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        {this.state.tasks.map(myTask => {
          return (<div key={myTask.task}>{myTask.task}</div>)
        })}
        {/* // <Task taskProp= {task} />)} */}
        {/* <div>{this.state.updatedTasks} </div> */}
        {/* <TodoForm /> when importing this component it the button do not work*/}
        <input type="text" placeholder="...to do" onChange={this.handleInputChange} />
        <button onClick={this.handleUpdateState}>Add ToDo</button>
        <button>Clear Completed </button>
      </div>
    );
  }
}

export default App;

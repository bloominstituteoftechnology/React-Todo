import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

let taskListArray = [
  {
    name: "Take out garbage",
    id: 2365346756,
    completed: false
  },
  {
    name: "Find the keys",
    id: 82456475456,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: taskListArray,
      task: '',
    };
  }

  handleChanges = e => {
    this.setState({ task: e.target.value });
  };

  addTask = task => {
		this.setState({
			tasks: [
				...this.state.tasks,
				{
					name: task,
					id: Date.now(),
					completed: false
				}
			]
		});
  };
  
  handleAddTask = e => {
    e.preventDefault();
    e.stopPropagation();
    this.addTask(this.state.task);
    this.setState({task: ''});
  };

  toggleCompleted = tID => {
    console.log("Task completed!");
    this.setState({
      tasks: this.state.tasks.map(taskItem => {
        // return task.id === taskId ? {...task, completed: !task.completed} : task
        if (taskItem.id === tID) {
          return {
            ...taskItem,
            completed: !taskItem.completed
          };
        } else {
          return taskItem;
        }
      })
    });
  };

  clearCompleted = () => {
   
    this.setState({
      tasks: this.state.tasks.filter(taskItem => !taskItem.completed)
    });
  };

  render() {
    return (
      <div>
        <div>
          
          <TodoList
            tasks={this.state.tasks}
            toggleCompleted={this.toggleCompleted}
          />
        </div>
        <div>
          <TodoForm
            handleChanges={this.handleChanges}
            addTask={this.addTask}
            handleAddTask={this.handleAddTask}
            tasks={this.state.tasks}
            task={this.state.task}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';

const App = () => (
  <div>
    <h2>Todo App</h2>
      <Tasks />
  </div>
);

class Tasks extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        text: 'make tasks show',
        completed: true,
      },
      {
        id: 2,
        text: 'toggle on/off',
        completed: true,
      },
      {
        id: 3,
        text: 'create form to add todos',
        completed: false,
      },
      {
        id: 4,
        text: 'add ability to toggle on click',
        completed: false,
      },
    ],
  };

  addTodo = (input) => {
    this.state.tasks.push({
      id: this.state.tasks.length,
      text: input,
      completed: false,
    });
  }

  toggleTodo = (event) => {
    if (event.target.completed) {
      this.setState({completed: false})
    } else this.setState({completed: true})
  }

  render() {
    return (
      <div className="task-list">
        <ul>
          {
            this.state.tasks.map(task => {
              return <Todo key={task.id} toggleTodo={this.toggleTodo} task={task}/>
            })
          }
        </ul>
        <form>
          Add a Todo: <input type="text" name="input" onSubmit={this.addTodo("input")}/>
        </form>
      </div>
    );
  }
}

function Todo(props) {
  if (props.task.completed) return <li onClick={props.toggleTodo}><strike>{props.task.text}</strike></li>
  else return <li onClick={props.toggleTodo}>{props.task.text}</li>
}

export default App;

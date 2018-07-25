import React from 'react';
import taskArr from './taskArr';


  const List = (props) => {
    const { task } = props.listProp;
    return (
      <div>
        <li>{task}</li>
      </div>
    );
  }
  
  
  class Todo extends React.Component {
    constructor() {
      super();
      this.state = {
        todo: taskArr
      }
    }
    handleAddTask = (event)=>{
        const tasks = this.state.todo.slice();
        if (event.key === 'Enter') {
            tasks.push({
                task: event.target.value,
                id: Date.now(),
                completed: false
            });
            this.setState({todo: tasks});
        };
    };

    handleChangeStatus = (event)=> {
        if (event.target.completed === false) {
            event.target.completed = true;
            event.target.style = 'text-decoration: line-through';
        } else {
            event.target.completed = false;
            event.target.style = null;
        }
    };
  
    render() {
      return (
        <div className="todo">
            <ul>
                <div onClick={this.handleChangeStatus}>{this.state.todo.map(item => <List listProp={item} />)}</div>
            </ul>
          <input placeholder="Add Task" onKeyPress={this.handleAddTask} />
        </div>
      )
    };
  }

  export default Todo;
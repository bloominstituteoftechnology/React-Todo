// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const taskList = this.props.tasks.map(item => <Todo key={item.id} name={item.task} completed={item.completed} completedHandler={this.props.completed}/>);
    return(
      <div className="to-do-list">
        <TodoForm newTask={this.props.newTask.bind(this)}
                  remove={this.props.remove.bind(this)} />
        {taskList}
      </div>
    );
  }
}

export default TodoList;

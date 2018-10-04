import React from 'react';
import ToDoList from './components/ToDoComponents/ToDoList.js';
import ToDoForm from './components/ToDoComponents/ToDoForm.js';
import {Tab, Tabs} from './components/Tab/Tabs.js';

class ProgressTracker extends React.Component {

//-- Setup and State -----------------------------
  constructor(init) {
    super(...arguments);
    this.state = {
      inputText: '',
      toDoList: [
        {
          task: 'whatever',
          id: 1234,
          completd: false
        }
      ],
      doneList: []
    };
  }

//-- Rendering -----------------------------------
  render = () => {
    return (
      <div className="progress-tracker">
        <h2>To Do List: {this.props.title}!</h2>
        <Tabs>
          <Tab title="To Do">
            <ToDoList
              toDoList={this.state.toDoList}
              handleToggle={this.toggleToDo}
            />
            <ToDoForm
              inputValue={this.state.inputText}
              handleChange={this.changeInput}
              handleAdd={this.add}
              handleClear={this.clear}
            />
          </Tab>
          <Tab title="Done">
            <ul>
              {this.state.doneList.map(toDo => (
                <li key={toDo.id}>{toDo.task}</li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </div>
    );
  }
  
//-- Event Handlers ------------------------------
  add = eventClick => {
    eventClick.preventDefault();
    const newTask = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      inputText: '',
      toDoList: [...this.state.toDoList, newTask]
    });
  }

  clear = eventClick => {
    eventClick.preventDefault();
    let finishedTasks = [...this.state.doneList];
    finishedTasks.unshift(...this.state.toDoList.filter(toDo => {
      return toDo.completed;
    }));
    let remainingTasks = this.state.toDoList.filter(toDo => {
      return !toDo.completed;
    });
    this.setState({
      doneList: finishedTasks,
      toDoList: remainingTasks
    });
  }

  toggleToDo = eventClick => {
    eventClick.preventDefault();
    let taskId = eventClick.target.dataset.taskid;
    let task = this.state.toDoList.find(toDo => {
      return (toDo.id.toString() === taskId.toString());
    });
    task.completed = !task.completed;
    this.setState({
      toDoList: [...this.state.toDoList]
    });
  }

  changeInput = eventChange => {
    //eventChange.preventDefault();
    this.setState({
      inputText: eventChange.target.value
    });
  }
}

//------------------------------------------------
export default ProgressTracker;

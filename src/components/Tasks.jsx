import React from 'react';
import ReactDom from 'react-dom';
import Options from './Options';
import ExpandableComponent from './ExpandableComponent';

require('./styles/Tasks.scss');

export default class TaskList extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {};
    this.state._title = props.title || '';
    this.state._moveableTasks = props.moveableTasks || false;
    this.state._options = props.options || [];
    this.state._tasks = props.children || [];
  }

  set title(title) {
    this.state._title = title || '';
    this.setState(this.state);
  }
  set moveableTasks(canMove) {
    this.state._title = canMove || false;
    this.setState(this.state);
  }
  set tasks(tasks) {
    this.state._tasks = tasks || {};
    this.setState(this.state);
  }

  get title() {
    return this.state._title;
  }
  get moveableTasks() {
    return this.state._moveableTasks;
  }
  get options() {
    return this.state._options;
  }
  get tasks() {
    return this.state._tasks;
  }

  render() {
    return (
      <div className="tasklist">
        { this.title !== '' &&
          <TaskListTitle title={this.title} />
        }
        { this.options.length > 0 &&
           <Options options={this.options} settings={{className: 'tasklist options option'}} />
        }
        <ul className="tasklist list">
          {this.tasks.map((task) => {
            return (
              <li className="tasklist list item" key={task.props.uuid}>
                {task}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export class TaskListTab extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tasklist tab">

      </div>
    );
  }
}

export class Task extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {};
    this.state._uuid = props.uuid;
    this.state._title = props.title;
    this.state._completed = props.completed;
    this.state._tabs = props.tabs || [];
    this.state._backgroundColor = props.backgroundColor || '#a3edfa';
    this.onTabClick = this.onTabClick.bind(this);
  }

  set title(title) {
    this.state._title = title;
    this.setState(this.state);
  }
  set completed(isCompleted) {
    this.state._completed = isCompleted;
    this.setState(this.state);
  }
  set tabs(tabs) {
    this.state._tabs = tabs;
    this.setState(this.state);
  }
  set backgroundColor(color) {
    this.state._backgroundColor = color || '#a3edfa';
    this.setState(this.state);
  }

  get title() {
    return this.state._title;
  }
  get completed() {
    return this.state._completed;
  }
  get tabs() {
    return this.state._tabs;
  }
  get backgroundColor() {
    return this.state._backgroundColor;
  }

  onTabClick(event) {
    console.log("clicked and made it to task");
    console.log("started: ", this.completed);
    this.completed = !this.completed;
    console.log("ended: ", this.completed);
  }

  render() {
    return (
      <div className="task" style={{'backgroundColor': this.backgroundColor}}>
        <TaskTitle title={this.title}/>
        <CheckBox checked={this.state._completed}/>
        <table>
          <tbody>
            {this.tabs.map((tab, index) => {
              return (
                <Tab onClick={this.onTabClick} key={index} {...tab} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class TaskListTitle extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {};
    this.state._title = props.title || '';
  }

  set title(title = {}) {
    this.state._title = title || '';
    this.setState(this.state);
  }

  get title() {
    return this.state._title;
  }

  render() {
    return (
      <table className="tasklist title" width="100%">
        <tbody>
          <tr>
            <td><hr /></td>
            <td style={{width: '1px', 'whiteSpace': 'nowrap'}}>{this.title}</td>
            <td><hr /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class TaskTitle extends TaskListTitle {
  constructor(props = {}) {
    super(props);
  }

  render() {
    return (
      <div className="task title">
        <h4>{this.title}</h4>
      </div>
    );
  }
}

class CheckBox extends React.Component {
  render() {
    return (
      <div className="task checkbox">
      {`${this.props.checked}`}
      </div>
    );
  }
}

class Tab extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {};
    this.state._title = props.title || '';
    this.state._icon = props.icon;
    this.state._onClick = props.onClick;
    this.state._type = props.contentsType;
    this.state._contents = props.contents;
    this.onClick = this.onClick.bind(this);
  }

  set title(title) {
    this.state._title = title || '';
    this.setState(this.state);
  }
  set icon(icon) {
    this.state._icon = icon;
    this.setState(this.state);
  }

  get title() {
    return this.state._title;
  }
  get icon() {
    return this.state._icon;
  }

  onClick(event) {
    console.log("clicked tab... sending to tab");
    this.state._onClick(arguments);
  }

  render() {
    if (this.title) {
      return (
        <table style={{float: "left"}}>
          <tbody className="task tab">
          <tr>
            <th>
              <button className="tab title" onClick={this.onClick}>
                { this.icon !== undefined && <i> icon </i> }
                { this.title }
              </button>
            </th>
          </tr>
          <tr>
            <td>
              <TabContents title={this.title} type={this.state._type} contents={this.state._contents} />
            </td>
          </tr>
          </tbody>
        </table>
      );
    }
  }
}

class TabContents extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tab contents">
        <label style={{display: 'none'}}> Name: {this.props.title} </label>
        <label style={{display: 'none'}}> Type: {this.props.type}  </label>
        <code> {this.props.contents} </code>
      </div>
    );
  }
}

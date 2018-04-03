import React, {Component} from 'react';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [this.defaultClass]
    };
    Object.assign(this.state, props);
  }

  defaultClass = 'todo-list__todo';

  updateStatus(){
    this.setState({ complete: !this.state.complete }, () => {
      let classes = this.state.classes;
      if (this.state.complete === true) {
        classes.push('todo-list__todo--complete');
      } else {
        classes = [this.defaultClass];
      }
      this.setState({ classes: classes });
    })
  }

  render(){
    return <li className={this.state.classes.join(' ')} onClick={this.updateStatus}>{this.state.text}</li>
  }
    
  
};



export default Todo;
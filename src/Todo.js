import React from 'react';
//import toggleCompleted from './TodoList';
import styles from './css/Todo.css';

const Todo = (props) => {
  return ( 
	   <li key={props.key} className={props.completed ? "completed" : ""} onClick={props.onClick}>{props.text}</li>  // this allows us to modify the colors of strike thoughs on deletion
	//	 <li key={props.key} onClick={props.onClick}>{props.completed ? <del>{props.text}</del> : props.text}</li>
  );
};

export default Todo;

 /* import React from 'react';
  import { Component } from 'react'; */

/*class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
      text: this.props.text,
      completed: false,
    };
  }
  
  render() {
    return (
      <li key={this.state.key} onClick={this.toggleCompleted}>{this.state.completed ? <del>{this.state.text}</del> : this.state.text}</li>
    );
  };

  toggleCompleted = () => {
    this.setState({
      completed: !this.state.completed,
		  });
  };
}

export default Todo; */

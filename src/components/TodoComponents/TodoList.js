// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// {this.state.todos.map(todo => (
//     <Todo todo={todo} />
//   ))}

import React, { Component } from 'react';
import Todo from './Todo'

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

  render() {
    console.log(this.props, 'X')
    return (
      <div>
      {this.props.todos.map(todo => (
         <Todo todo={todo} />
      ))}
      {this.props.todos.map(todo => (
        <Todo todo={todo} />
     ))}
      </div>
    )
  }
}

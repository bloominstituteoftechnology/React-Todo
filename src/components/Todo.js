import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();  
    }
    render() {
        return (
       <ul>
           {this.props.list.map((item, index) => <li key={index}>{item}</li>)}
       </ul>
    )}
}
  
export default Todo;
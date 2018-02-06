import React from 'react';
import Component from 'react';
import { render } from 'react-dom';
import App from '.components/App';

class Todo extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          task: 'Install Yarn',
        },
        {
          id: 2,
          task: 'Build a Website for a non-profit',
        },
        {
          id: 3,
          task: 'Photography Portfolio'
        },
      ],
    };
  }
  render() {
    return (
      <div className="To-do-List">
      <ul>
        {
          this.state.items.map((todo) => {
            return <li key={this.id}>{task}</li>
          })}  
      </ul>
      </div>
    )
  }




}
export default ToDo;
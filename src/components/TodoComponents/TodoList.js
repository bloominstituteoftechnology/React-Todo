// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.listItems = this.props.listItems;
  }

  render() {
    return (
      <div>
        <h3>Test Header For TodoList</h3>
        <ul>
          {this.listItems.map((item, index) => <Todo key={index} item={item} />)}
        </ul>
      </div>
    );
  }
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react';

const List = props => (<ul>
  {props.items.map((item, index) => <li key={index}>{item}</li>)}
</ul>);

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div></div>);
  }

}

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

render() {
    return (
        <div className="grocery-list">
            {this.props.shopList.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    onClick={(e) => this.props.toggleItem(e, item.id)} />
            ))}
            </div>
    )
  }
}

export default TodoList;

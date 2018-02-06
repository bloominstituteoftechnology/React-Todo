import React from 'react';
import ToDo from './ToDo.js';

class TodoList extends React.Component {
  state = {
    items: [],
    newItem: {
          id: 1,
          text: '',
    },
    cont: 1,
  };

  addItem = (event) => {
    event.preventDefault();
    const stateCopy = this.state;
    stateCopy.items.push(this.state.newItem);
    stateCopy.cont += 1;
    this.setState({
      items: stateCopy.items,
      newItem: {
        id: stateCopy.cont,
        text: '',
      },
    })
  }

  update = (event) => {
    let newItem = this.state.newItem;
    newItem.text = event.target.value;
    this.setState({ newItem: newItem });
  }

  checkOff = (event) => {
    if (event.target.className === 'incomplete') {
      event.target.className = 'complete';
      return;
    }
    event.target.className = 'incomplete';
  }

  render = () => {
    return (
      <div>
        <div className="list">
          <ul onClick={this.checkOff}>
            {this.state.items.map((item) => {
              return <ToDo key={item.id} item={item} />
            })}
          </ul>
        </div>
        <div className="form">
          <form onSubmit={this.addItem}>
            <input type="text" value={this.state.newItem.text} onChange={this.update} placeholder="Add Item Todo!" />
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList;
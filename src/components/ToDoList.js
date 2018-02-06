import React from 'react';
import ToDo from './ToDo.js';

class ToDoList extends React.Component {
  state = {

    itemsList: [],

    newItem: {
      id: 1,
      text: '',
    },

    counter: 1,

  };

  addToDo = (event) => {
    event.preventDefault();
    const stateCopy = this.state;
    stateCopy.itemsList.push(this.state.newItem);
    stateCopy.counter += 1;
    this.setState({
      itemsList: stateCopy.itemsList,
      newItem: {
        id: stateCopy.counter,
        text: '',
      },
    })
  }

  updateNew = (event) => {
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
            {this.state.itemsList.map((item) => {
              return <ToDo key={item.id} item={item} />
            })}
          </ul>
        </div>
        <div className="form">
          <form onSubmit={this.addToDo}>
            <input type="text" value={this.state.newItem.text} onChange={this.updateNew} placeholder="Add a ToDo!" />
          </form>
        </div>
      </div>
    )
  }
}

export default ToDoList;
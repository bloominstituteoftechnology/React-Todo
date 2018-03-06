import React, { Component } from 'react';
import Done from './Done.js';
import './Done.css';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      list: [{
        text: 'watch pokeon',
        clicked: false
        }
        /*'watch pokeon',
        'Throw out the Garbage',
        'make lunch',
        'go for a walk'*/
      ],
      newItem: {
        text: '',
        clicked: false,
      }
    };
  }

  handleListInput = event => {
    this.setState({ newItem: {
      text: event.target.value,
      clicked: false
    }});
  };

  addItem = event => {
    event.preventDefault();
    const itemsList = this.state.list;
    itemsList.push(this.state.newItem);
    this.setState({
      newItem: {
        text: '',
        clicked: false,
      },
      list: itemsList
    });
  };

  childFunc = (index) => {
    this.setState({
      selected: index
    });
  }

  handleXClick = (event) => {
    const arrayIndex = event.target.id;
    const itemsList = this.state.list;
    console.log(arrayIndex);
    // itemList.slice()
    //
    // this.setState({
    // });
  };

  render() {
    return (
      <div>
        {this.state.list.map((item, i) => <div><div id={i} class="one" onClick={this.handleXClick}>x</div> <Done key={i} index={i} thing={item} action={this.childFunc}/></div>)}
        <form onSubmit={this.addItem}>
          <input
            type="text"
            onChange={this.handleListInput}
            placeholder="Add a new item"
            value={this.state.newItem.text}
          />
        </form>
      </div>
    );
  }
}
export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";
import "./Todo.css";




export default class TodoList extends Component {
  constructor(props) {
    super();

    this.state = {
      items: []

    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";


    e.preventDefault();
  }

  deleteItem(key){
      var filteredItems = this.state.items.filter(function(item){
          return (item.key !== key)
      });

  this.setState({
      items: filteredItems
  })
}

//   markComplete(id, isComplete) {
//     return event => {
//         this.setState(currentState => ({
//           items: currentState.items.map(item => {
//             if (item.id !== id) return item;
//             return { id: item.id, name: item.name, complete: isComplete };
//           })
//         }));
//       };
//   }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            ></input>
            <button type="submit">add</button>
            {/* <button onClick={this.markComplete(items.id, true)}>Mark Complete</button> */}
          </form>
        </div>
        <Todo enteries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

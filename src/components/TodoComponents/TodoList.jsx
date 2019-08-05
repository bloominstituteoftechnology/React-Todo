import React, { Component } from "react";
import TodoForm from "./TodoForm.jsx";
import { ToDoItem, completedItems, itemList } from "./toDoItem.js";
import Items from "./items.jsx";
import CompletedItems from "./completedItems.jsx";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemList,
      itemsCompleted: completedItems
    };
    this.addItem = this.addItem.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.delete = this.delete.bind(this);

  }
  addItem(name) {
      if(name.trim() === ""){
         console.error("item cannot be empty");
         alert("item cannot be empty")
         return;
      }
    const item = new ToDoItem();
    item.name = name;
    itemList.push(item);
    this.setState({ itemsCompleted: completedItems });
    this.setState({ items: itemList });

  }

  markComplete(obj) {
    obj.completed = true;
    this.setState({ itemsCompleted: completedItems });
    this.setState({ items: itemList });
    
  }
  delete(obj) {
    obj.delete();
    this.setState({ itemsCompleted: completedItems });
    this.setState({ items: itemList });
  
  }
 

  render() {
    console.log("started:", itemList);
    return (
        <>
      <div className="search">
        <TodoForm addItem={this.addItem} />
        </div>

        <div className="container-fluid todo-list">
          <div className="row">
            <div className="col-sm">
              <Items items={this.state.items} handleClick={this.markComplete} />
            </div>
            <div className="col-sm">
              <CompletedItems
                items={completedItems}
                handleClick={this.delete}
              />
            </div>
          </div>
        </div>
        </>
      
    );
  }
}

export default TodoList;

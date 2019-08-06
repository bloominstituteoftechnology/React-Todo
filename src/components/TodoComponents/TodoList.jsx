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
    this.store = this.store.bind(this);
    this.serialize = this.serialize.bind(this);
    this.deSerialize = this.deSerialize.bind(this);

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
    this.store();


  }

  markComplete(obj) {
    obj.completed = true;
    this.setState({ itemsCompleted: completedItems });
    this.setState({ items: itemList });
    this.store();

    
  }
  delete(obj) {
    obj.delete();
    window.localStorage.removeItem(obj.name);//future danny why does this NOT work!?!?!?
    this.setState({ itemsCompleted: completedItems });
    this.setState({ items: itemList });
    this.store();
  
  }
  serialize(object){
    const item = {
      name:object.name,
      createdOn: object.createdOn,
      important: object.important,
      completed: object.completed,
      btnClass:object.btnClass,
    }
    return JSON.stringify(item);
  }
  deSerialize(string){
    const item = JSON.parse(string);
    if (item.completed === "Delete"){
      item.completed = true;
    }else if (item.completed === "Complete"){
      item.completed = false;
    }
    return item;
  }
  store() {
    //serialize the arrays and store them
    this.state.items.forEach(item => {
      window.localStorage.setItem(item.name, this.serialize(item))
    })
    this.state.itemsCompleted.forEach(item => {
      window.localStorage.setItem(item.name, this.serialize(item))
    })
  }
  createItemsFromStorage(){

    for (let i = 0; i < window.localStorage.length; ++i){
      let data = this.deSerialize(window.localStorage.getItem(window.localStorage.key(i)));
      let item = new ToDoItem();
      item.name = data.name;
      item.createdOn = data.createdOn;
      item.completed = data.completed;
      item.btnClass = data.btnClass;
    }
    this.setState({ itemsCompleted: completedItems });
    this.setState({ items: itemList });
  }
  componentDidMount(){
    this.createItemsFromStorage();
  }
 

  render() {
    
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

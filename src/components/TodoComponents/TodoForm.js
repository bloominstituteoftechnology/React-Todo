import React from 'react';
import './Todo.css';

import TodoList from  './TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [],
      text: ""
    };
    
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.markItemCompleted = this.markItemCompleted.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  handleAddItem(event) {
    event.preventDefault();
    
    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    };
    
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ""
    }));
  }
  markItemCompleted(itemId) {
    var updatedItems = this.state.items.map(item => {
      if (itemId === item.id)
        item.done = !item.done;
      
      return item;
    });
    
    // State Updates are Merged
    this.setState({
      items: [].concat(updatedItems)
    });
  }
  handleDeleteItem(itemId) {
    var updatedItems = this.state.items.filter(item => {
      return item.id !== itemId;
    });
    
    this.setState({
      items: [].concat(updatedItems)
    });
  }
  render() {
    return (
      <div>
        <h3 className="apptitle">TO DO LIST: MVP & Stretch Goal</h3>
        <div className="row">
          <div className="col-md-3">
            <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} />
          </div>
        </div>
        <form className="row">
          <div className="col-md-3">
            <input type="text" className="form-control" onChange={this.handleTextChange} value={this.state.text} />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={this.handleAddItem} disabled={!this.state.text}>{"Add Todo # " + (this.state.items.length + 1)}</button>

            <button className="btn buttonspacer btn-danger" onClick={this.handleClearCompleted} disabled={!this.state.text}>{"Clear Completed "}</button>
          </div>
        </form>
      </div>
    );
  }
}



export default TodoApp;
import React, { Component } from "react";

class TodoList extends Component {
	constructor(){
		super();

		this.state = {
			todos: ["Finish coding", "go for a walk", "clean the kitchen"],
			newTodo: ""
		}

		this.updateString = this.updateString.bind(this);
		this.updateList = this.updateList.bind(this);
		this.crossoutItem = this.crossoutItem.bind(this);
	}

  updateString(event){
    this.setState({newTodo: event.target.value});
    console.log(this.state);
  }

  updateList(event){
    const list = this.state.todos;
    list.push(this.state.newTodo);
    this.setState({
      todos: list,
      newTodo: ""
    })
  }

  crossoutItem(event){
    event.style.text-decoration = "line-through";
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.todos.map((item, index) => {
            return <li key={index} onClick={crossoutItem}>{item}</li>
          })}
        </ul>

        <form onSubmit={this.updateList}>
          <input type="text" onChange={this.updateString} placeholder="enter item here" value={this.state.newTodo} />
        </form>
      </div>
      )
  }
 }


export default TodoList;
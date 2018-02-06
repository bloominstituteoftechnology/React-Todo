import React, { Component } from "react";

class TodoList extends Component {
	constructor(){
		super();

		this.state = {
			todos: ["Finish coding", "go for a walk", "clean the kitchen"],
			newTodo: ""
		}

		this.updateString = this.updateString.bind('this');
	}

  updateString(event){
    this.setState({newTodo: event.target.value});
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.todos.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        <form>
          <input type="text" onChange={this.updateString} placeholder="enter item here" value={this.state.newTodo} />

        </form>
      </div>
      )
  }
 }


export default TodoList;
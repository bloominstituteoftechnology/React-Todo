import React from "react";
// import ToDo from "./ToDo.js";

const ToDoList = props => {
  return (
    <div>
      <h1>{props.newItem}</h1>
      {props.todos.map((item, index) => (
        <div key={item + index}>{item}</div>
      ))}
    </div>
  )
}

// class ToDoList extends ToDo {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			newItem: props.newItem,
// 			itemsList: props.todos
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.state.newItem}</h1>
// 				{this.state.itemsList.map( (item, index) => (
// 					<div key={item+index}>{ item }</div>
// 				))}
// 			</div>
// 		)
// 	}
// }

export default ToDoList;
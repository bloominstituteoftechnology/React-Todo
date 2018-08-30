
import React from "react";
class Todo extends React.Component {
 render() {
   return 
   <li
   onClick={() => this.props.itemCompleted(this.props.items.id)}
   id={this.props.items.id}
   className={`todo-item ${this.props.items.completed}`}
 >
   {this.props.items.task}
 </li>

 }
}
export default Todo;
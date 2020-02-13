import React from 'react';

function Todo(props) {
    let completed = props.task.completed ? ' completed' : '';
    return (
        <div
            className={`task ${completed}`}
            key={props.task.id}
            onClick={event => {
                props.toggleTask(props.task.id);
            }}
        >

                   <p>{props.task.task}</p> 
                </div>
    );
}

export default Todo 




// import React, { Component } from "react";


// export default class Todo extends Component {
  
//   render() {
//     var todoEnteries = this.props.enteries;
//     var listItems = todoEnteries.map(this.createTasks);

//     return (
//       <li
//         onClick={this.props.toggleComplete(this.props.item.key)}
//         className={this.props.item.completed ? "complete" : null}
//       >
//         {this.props.item.text}
//       </li>
//     );
//   }
// }




// import React, { Component } from "react";
// import FlipMove from "react-flip-move";

// export default class Todo extends Component {
//   constructor(props) {
//     super(props);

//     this.createTasks = this.createTasks.bind(this);
//   }
//   createTasks(item) {
//     return (
//       <li onClick={() => this.delete(item.key)} key={item.key}>
//         {item.text}
//       </li>
//     );
//   }

//   delete(key) {
//     this.props.delete(key);
//   }

//   render() {
//     var todoEnteries = this.props.enteries;
//     var listItems = todoEnteries.map(this.createTasks);

//     return (
//       <ul className="theList">
//         <FlipMove duration={250} easing="ease-out">
//           {listItems}
//         </FlipMove>
//       </ul>
//     );
//   }
// }
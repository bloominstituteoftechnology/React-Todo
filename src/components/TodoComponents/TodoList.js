// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import "./Todo.css";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="list-wrapper">
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;


// import "./Todo.css";
// import React from 'react';
// import Todo from './Todo.js';

// class TodoList extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             items: []
//         };

//         this.addItem = this.addItem.bind(this);
//     }

//     addItem(e) {
        
//     }


//     return (
//         <div className="todo-list">
//             {todos}
//         </div>
//     )
// }

// export default TodoList;
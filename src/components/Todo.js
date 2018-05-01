import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.map(function(todo, index) {
            console.log(todo.completed)
            return <li key={index}
                       onClick={function(e){
                        if(e.target.style.textDecoration === "line-through") {
                          e.target.style.textDecoration = "none"
                        } else {
                          e.target.style.textDecoration = "line-through"
                        }
                       }}
            >{todo.task}</li>
          })}
        </ul>
      </div>

    );
  }
}

export default Todo;
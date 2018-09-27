// this is the list of ToDo items
import React, { Component } from "react";
import "./ToDoItem";
import "./ToDoList.css";

class ToDoList extends React.Component {
  // there is no state

  render() {
    // we need two things in props
    // 1. the list
    // 2. a click handler to pass to children

    return (
      <div>
        <div>
          <h2>Current ToDo Items</h2>
        </div>
        <ul>
          <li>
            {this.props.toDoItems.map(todo => {
              return (
                <toDoItems
                  key={todo.id}
                  todo={todo}
                  handleClick={this.props.handleClick}
                />
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default ToDoList;

/*
* Be sure to keep your todos in an array on state. Arrays are so awesome to work with.
  
  * When you need to iterate over a list and return React components out as elements, you'll need to include a "key" property on the element itself. `<ElementBeingRendered key={someValue} />`. Note: this is what react is doing under the hood, it needs to know how to access each element and they need to be unique so the React engine can do its thing. An example snippet that showcases this may look something like this:
  ```
  this.state.todos.map((toDoItem, i) => <AnotherComponent key={i} toDoItem={toDoItem} />);
  ```
  Here, we're simply passing the index of each toDoItem item as the key for the individual React component.
*/

{
  /* <ul>
        <ToDoItem>ToDo item list appears here.</ToDoItem>
        {props.toDoListItems.map(toDoItem => {
          if (toDoItem.completed) {
            return (
              <li key={toDoItem.id} className="toDoItemComplete">
              <button
              className="itemComplete"
              onClick={() => {
                props.completedTodo(toDoItem.id);
              }}
              />
              {toDoItem.task}
              <div className="strikeThrough" />
              <button
              className="itemStrikeout"
              onClick={() => {
                props.removeTodo(toDoItem.id);
              }}
              />
              </li>
              );
            } else {
              return (
                <li key={toDoItem.id}>
                <button
                className="itemComplete"
                onClick={() => {
                  props.completedTodo(toDoItem.id);
                }}
                />
                {toDoItem.task}
                <button
                className="itemNotComplete"
                onClick={() => {
                  props.removeTodo(toDoItem.id);
                }}
                />
                </li>
                );
              }
            })}
          </ul> */
}

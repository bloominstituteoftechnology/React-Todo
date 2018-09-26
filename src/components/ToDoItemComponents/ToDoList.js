// this is the list of ToDo items
import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

const ToDoList = props => {
  return (
    <div>
      <div>
        <h2>Current ToDo Items</h2>
      </div>
      <ul>
        <ToDoItem>ToDo item list appears here.</ToDoItem>
        {props.toDoListItems.map(todo => {
          if (toDoItem.completed) {
            return (
              <li key={toDoItem.id} className="todo-completed">
                <button
                  className="white-btn green-btn fa fa-thumbs-up"
                  onClick={() => {
                    props.completedTodo(toDoItem.id);
                  }}
                />
                {toDoItem.task}
                <div className="strike-line" />
                <button
                  className="white-btn trash-btn fa fa-trash-o"
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
                  className="white-btn gray-btn fa fa-thumbs-up"
                  onClick={() => {
                    props.completedTodo(toDoItem.id);
                  }}
                />
                {toDoItem.task}
                <button
                  className="white-btn trash-btn fa fa-trash-o"
                  onClick={() => {
                    props.removeTodo(toDoItem.id);
                  }}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ToDoList;

/*
* Be sure to keep your todos in an array on state. Arrays are so awesome to work with.
  
  * When you need to iterate over a list and return React components out as elements, you'll need to include a "key" property on the element itself. `<ElementBeingRendered key={someValue} />`. Note: this is what react is doing under the hood, it needs to know how to access each element and they need to be unique so the React engine can do its thing. An example snippet that showcases this may look something like this:
  ```
  this.state.todos.map((todo, i) => <AnotherComponent key={i} todo={todo} />);
  ```
  Here, we're simply passing the index of each todo item as the key for the individual React component.
*/

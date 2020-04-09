// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import { Container } from "semantic-ui-react";
import TodoStyle from "./TodoStyle.css";

//components
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import ClearList from "./ClearList";

const TodoList = props => {
  const objectLength = Object.keys(props.itemData).length;
  return (
    <Container>
      <h1>Shopping List</h1>
      <TodoForm addItem={props.addItem} itemData={props.itemData} />
      {props.itemData.map(item => {
        return (
          <Todo item={item} key={item.itemID} toggleItem={props.toggleItem} />
        );
      })}
      {objectLength > 0 && <ClearList deleteAll={props.deleteAll} />}
    </Container>
  );
};

export default TodoList;

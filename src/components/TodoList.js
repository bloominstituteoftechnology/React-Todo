import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((item) => {
          return <Todo key={item.id} title={item.title} />;
        })}
        <h3>todo list</h3>
        <Todo />
        <button type="button">CLEAR LIST</button>
      </ul>
    );
  }
}

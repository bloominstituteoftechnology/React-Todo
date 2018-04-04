import React, { Component } from "react";
import ToDoItems from "./toDoItems";
import "./toDoList.css";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  class ToDoList extends Component {
      constructor() {
          super();
          this.state = {
              items: []
          };

          this.addItem = this.addItem.bind(this);
      }

      addItem(e){
          if (this._inputElement.value !== "") {
              let newItem = {
                  text: this._inputElement.value,
                  key: Date.now()
              };

              this.setState((prevState) => {
                  return {
                      items: prevState.items.concat(newItem)
                  };
              });
          }

          this._inputElement.value = "";
          e.preventDefault();
      }

      render() {
          return (
            <div className="toDoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeHolder="Enter Todo!">
                        </input>
                        <button type="submit">add Me</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items}/>
            </div>
          );
      }
  }

  export default ToDoList;


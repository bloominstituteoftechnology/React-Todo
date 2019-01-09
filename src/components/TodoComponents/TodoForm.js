import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <input placeholder="....todo" />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default Form;

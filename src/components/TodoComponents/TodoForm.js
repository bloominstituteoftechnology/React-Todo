import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  // handleChanges = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // submitItem = e => {
  //   e.preventDefault();
  //   this.props.addItem(this.state.item);
  // };

  render() {
    return (
      <form>
        <input
          type="text"
          value=""
          name="item"
          // onChange=
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;

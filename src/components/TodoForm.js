import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: ""
    };
  }

  handleChanges = e => {
    this.setState(
      {
        keyword: e.target.value
      },
      () => console.log(this.state.keyword)
    );
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addItem(this.state.keyword);
    this.setState({
      keyword: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="item"
          placeholder="item"
          value={this.state.keyword}
          className="add-btn"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;

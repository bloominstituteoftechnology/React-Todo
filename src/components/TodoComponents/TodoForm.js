import React from "react";
import { Form, Button, Input } from "semantic-ui-react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemText: ""
    };
  }

  changeHandler = event => {
    this.setState({ itemText: event.target.value });
    // console.log(event.target.value);
  };

  submitHander = event => {
    event.preventDefault();
    this.props.addTodoItem(this.state.itemText);
    this.setState({ itemText: "" });
  };

  render() {
    return (
      <Form onSubmit={this.submitHander}>
        <Form.Field>
          <label>Notes...</label>
        </Form.Field>
        <Input
          focus
          type="text"
          name="itemText"
          // value={this.state.itemText}
          onChange={this.changeHandler}
          style={{ marginRight: "5%", marginBottom: "2%" }}
        />
        <Button type="submit">Add Item</Button>
      </Form>
    );
  }
}

export default TodoForm;

{
  /* <input
  type="text"
  name="itemText"
  value={this.state.itemText}
  onChange={this.changeHandler}
/> */
}
{
  /* <button  type="submit">Add Item</button> */
}

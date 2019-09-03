
import React from "react";
import { Container, Form, Button, Icon } from "semantic-ui-react";

// build this component as a class so that it can manage its own state

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    //   console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              type="text"
              value={this.state.todo}
              name="todo"
              onChange={this.handleChanges}
            />
            <Form.Button>Add</Form.Button>
          </Form.Group>
        <Button size='small' color='teal' onClick={this.props.clearAll}>Clear All</Button>
        <Button size='small' color='green' onClick={this.props.clearCompleted}>Clear Completed</Button>
        </Form>
      </Container>
    );
  }
}

export default TodoForm;
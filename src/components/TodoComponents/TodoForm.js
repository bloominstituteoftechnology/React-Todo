import React from "react";
// import {Form, Field} from "formik";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  // const handleSubmit = e => {
  //   this.state.text = e.target.value;
  // }

    handleChanges = e => {
      this.setState({
       text: e.target.value
      })
    }

    handleSubmit = e => {
      e.preventDefault();
      // console.log(e.target.value);
      this.props.addItem(this.state.text)
      // console.log(this.state.text)
    };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="newtodo">
          {" "}
          Enter your to do here!
          {/* assign onSubmit to handleSubmit i think */}
          <input id="newtodo" type="text" value={this.state.text} onChange={this.handleChanges}/>
        </label>
        <button onClick={this.handleSubmit}>Submit!</button>
      </form>
      // <Form>
      //   <Field type="text" name="NewToDo" placeholder="Type New To Do Here"/>
      //   <button>Submit!</button>
      // </Form>
    );
  }
}

export default TodoForm;

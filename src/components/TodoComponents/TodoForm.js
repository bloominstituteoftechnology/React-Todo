import React from "react";
// import {Form, Field} from "formik";

class TodoForm extends React.Component {
  constructor() {
    super(); 
    this.state = {
      text:  ''
    }
  }

  // const handleSubmit = e => {
  //   this.state.text = e.target.value;
  // }
  render() {
    return (
      <form>
        <label for="newtodo">
          {" "}
          Enter your to do here!
          {/* assign onSubmit to handleSubmit i think */}
          <input id="newtodo" type="text"  />
        </label>
        <button onClick ='handleclickfunction'>Submit!</button>
      </form>
      // <Form>
      //   <Field type="text" name="NewToDo" placeholder="Type New To Do Here"/>
      //   <button>Submit!</button>
      // </Form>
    );
  }
}

export default TodoForm;

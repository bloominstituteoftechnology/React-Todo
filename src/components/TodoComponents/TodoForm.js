import React from "react";
// import {Form, Field} from "formik";

class TodoForm extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form>
        <label for="newtodo">
          {" "}
          Enter your to do here!
          <input id="newtodo" type="text" />
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

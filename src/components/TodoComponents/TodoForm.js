import React  from "react";

export default class MyForm extends React.Component {
    state = {
    task: 'Learn React',
    id: 1528817077286,
    completed: false

    };

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
      };

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input

export default TodoForm;
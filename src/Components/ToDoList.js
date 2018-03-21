import React, { Component } from 'react';

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: "",
        };
    }

    addTodo = (event) => {
        // This `preventDefault` call here is just to prevent the default behavior of an HTML form upon submission
        event.preventDefault();
        // We create a copy of our dogNames array in state, then push a new dog name onto our copy
        const todos = this.state.todos;
        todos.push(this.state.newTodo);
        // Now we update `this.state.dogNames` with the newer copy of our dogNames array
        // We also clear the value of the newDog field so that it is ready to accept new input after a submission has been made
        this.setState({
          newTodo: '',
          todos: todos
        });
      };

      handleNewTodo = (event) => {
        this.setState({ newTodo: event.target.value });
      };

    render() {
        return (
        <div>
        {/* The render method can only return a single HTML element, meaning whatever we want to render
         must be wrapped inside a single base parent HTML element */}
        {/* We can write and execute plain-old JavaScript inside of JSX */}
        {this.state.todos.map(todo => <div>{todo}</div>)}
        {/* A form to add more dogs to our list of dogs */}
        {/* Upon submission, our form invokes our `addDog` method */}
        <form onSubmit={this.addTodo}>
          {/* Each time our input detects a change, it invokes our `handleNewDogNameInput` method */}
          {/* The newDog field on our state object will get updated as input is typed in, so we set the valu of this form to be `this.state.newDog` */}
          <input type="text" onChange={this.handleNewTodo} placeholder="Add a task!" value={this.state.newTodo} />
        </form>
      </div>
      );
    }
}

export default ToDoList;
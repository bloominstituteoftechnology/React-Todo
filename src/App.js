import React from "react";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <form>
          <input type="text" placeholder="Add new task here"></input>
          <button type="submit">Add Todo</button>
          <button type="submit">Clear completed</button>
        </form>

        {/* Add a TodoList.js component here
          * it will return a <ul> of todo items*/}
       
      </div>
    );
  }
}

export default App;

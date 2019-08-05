import React from 'react';
import { buildSnapshotResolver } from 'jest-snapshot/build/snapshot_resolver';
import { TodoListdata } from "./components/TodoComponents/TodoList.js"; 

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      todo: TodoListdata
    }
    console.log(this.state); 
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
         {/* Title Section */}
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
  
      <section>
        {/* Form and button section */}
        <form> 
        <input type="text" placeholder="enter todo here" /> 
        </form>

        <div> 
        <button> Submit </button>
        <button> Clear </button>
        </div> 
       </section>
       {/* Content seciton */}
       <div>
             
       </div>
       </div> 
      
    );
  }
}

export default App;

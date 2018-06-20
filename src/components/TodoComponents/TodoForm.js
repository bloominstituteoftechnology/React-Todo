import React from "react";

const TodoForm = props => {
    // single-responsibility principle: Display a single band.
    return (
    <div>
      <form>
          <input type="text" name="Todo"/><button>Add Todo</button><button>Clear Completed</button>
      </form>
    </div>
    )
};

  
  export default TodoForm;
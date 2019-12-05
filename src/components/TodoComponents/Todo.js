import React from React;

class Todo extends React.Component {

    constructor() {

        super();
        this.state = {
            task : task,
            id: Date.now(),
            completed: Date.now()
        }; 
    
      }

      render() {
        return (
          <div>
            <h2>Todo List: MVP</h2>
          </div>
        );
      }

}

export default Todo;
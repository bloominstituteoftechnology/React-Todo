//importing TodoList to from react
import React, { TodoList } from 'react';

class Todo extends Component {
    //declaring my class
    constructor() {
    //building out my constuctor 
    super();
    this.state = [
        //this is the state that the component will work with 
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        }
      ];
    }
}


//exportig
export default App;



// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

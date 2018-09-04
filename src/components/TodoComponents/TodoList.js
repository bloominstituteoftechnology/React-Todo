import React, { Component } from 'react';



class TodoList  extends Component {

    constructor(props) {
        super(props);
        this.state = { tasks: [
            {
              task: 'Organize Garage',
              id: 1528817077286,
              completed: false
            },
            {
              task: 'Bake Cookies',
              id: 1528817084358,
              completed: false
            },

            {
                task: 'Clean kitchen',
                id: 1528817061358,
                completed: false
              }
          ]
        }
    };


    
    render() {
        return ( 
            <React.Fragment>

            this.state.tasks.map( task => <li key={this.state.tasks.id}>{this.state.tasks.task}</li>);

            </React.Fragment>);
    }
}
 
export default TodoList;
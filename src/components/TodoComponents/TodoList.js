import React, { Component } from 'react';



class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            taskList: [
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
                    task: 'Clean bathrooms',
                    id: 1528815984358,
                    completed: false
                  },
                  {
                    task: 'Rake Leaves',
                    id: 1528816094358,
                    completed: false
                  }

              ]
        };
    }


    render() { 
    
        return (  
            <div key={this.state.taskList.id}> 
            {this.state.taskList.map(tasks =>  `${tasks.task}`)} 
                </div>
        );
    }
}
 
export default TodoList;
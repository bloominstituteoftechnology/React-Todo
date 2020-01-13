import React from "react";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component{

    render(){
        return(
            <div>
                {this.props.list.map( i => 
                    <p key={i.id}
                        className={i.done ? 'done' : 'undone'}
                        id={i.id}
                        onClick={this.props.doneToggle}
                        task={i.task}
                    >{i.task}</p>
                )}
            </div>
        );
    }
    
    }
    
    export default TodoList;

{/* <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array. */}
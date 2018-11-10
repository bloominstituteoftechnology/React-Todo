// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
// import './Todo.css';

const TodoList = props => {
    return (
        <div>

            {props.todos.map((item, index) => {
        return (
          <h4
            key={index}
            onClick={() => props.taskCompleted(index)}
            className={item.style}
          >
            {item.todo}
          </h4>
        );
      })}   
            <div>

                <form onSubmit={props.addNewTask}>

                    <input
                        type="text"
                        name="newTask"  
                        placeholder="...todo" 
                        value={props.newTask}
                        onChange={props.changeHandler}
                    />  

                    <button type="submit" onClick={props.addNewTask}>Add Todo</button>
                    

                </form>
                <button onClick={props.filterCharacter}>Clear Completed</button>
            </div>   
           
        
        






        </div>
    );
}

export default TodoList;
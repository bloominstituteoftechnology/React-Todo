import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    return (
        <div className='todo-card'>
             {props.toDoItems.map(item =>  /* STEP 3. MAP OVER THE ARRAY TO GET EACH INDIVIDUAL ITEM --toDoItems is holding in all the data from our array toDo  */
                (
                <Todo                       /* STEP 4. SEND RESULTS OF MAP TO THE TODO COMPONENT --ITEM IS NOW A PROP OF TODO (remember {item} is just the results from map being held in the variable item) */
                    key={item.id} 
                    item={item} 
                    changeComplete={props.changeComplete}                            /*NEXT STEPS IN TODO */
                />
                ))} 

                
        </div>
    ); 
}

export default TodoList;
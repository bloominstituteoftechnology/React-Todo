// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

{/* <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array. */}

import React from 'react';


import App from '../App';



const TodoList = () => {
    return (
        <div className="newTodo">
            {this.state.todoList} 
        </div> 
    );
};


//this type of iteration is on this page
// {this.state.animals.map(animal => <Animal animalProp={animal} />)}
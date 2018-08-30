import React from "react";

//Import ToDo.js component <li> since this component will hold a component

import ToDo from "./Todo";

// Creating an List component that will iterate and contain all of the lists passed through
// Dont worry about functionality for now
// Passing in props object and returning a <ul> JSX tag and within it using Javascript Component with brackets
// {props.users.map}

function ToDoList(props) {

        return <ul>{props.list.map(list => <ToDo listItem={list} />)}</ul>;

    // Inside of ToDo.js created props.user property, this property is set here to intake input inside object, this.state's, users property and list them inside this list
    
    // This is the *POINT OF CONFUSION*, where I set components and their properties up for needed functionalities. I know what they compents and properties are for, but I don't know why I need them
    // Writing out these notes actually clears confusion up more :D

    // Creating prop.user.map to iterate through this.states.users array, where we will add functionality to take input.  *POINT OF CONFUSION CLEARED, WE WILL ADD FUNCTIONALITY THOUGHT I DO NOT YET KNOW HOW* Assuming it involves state and setState and unknown syntax set up :D

    // prop.users.map will iterate, equate and merge with the always changing users array list *IS THIS REACTIVITY!?*

    // Creating props.users... that will be used in App.js, we will be throwing inside of it users from this.state.users Array list. This map function will physically render ToDo list items on screen after merging the ToDo list item   to the ToDo property. 

    // *MOMENT OF REALIZATION* This only renders the users ToDo.js List Item using map, while the prop.users property of this ToDoList.js component creates a property to be accepted in the parent component

    
  }


// Exporting App.js as a component that will merge with ToDoForm.js 
export default ToDoList;
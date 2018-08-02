import React from 'react';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
     todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    }
  // All of your handler functions should live here on <App />. Before the last curly brace of <App />
  // 



  }

  render(){
    return (
      <div>
        <ParentOfList 
        todos= {this.state.todos}/> 
        <TodoForm timeStamp = {this.state.todos[0].id}/>
      </div>)
  }

}

//Above: because we're in scope, TodoList is grabbing this.state.todos and assigning to the attribute named todos that will go to the props object of TodoList. 


//do first for just styling

const TodoForm = props => {
	return (
		<div>
		  <input type = "text" placeholder ="…todo" />
		  <button>Add Todo</button>
		  <button>Clear Completed</button>
      <button>{props.timeStamp} Just testing props here</button>
		</div>
	)
}


//Below, this props parameter is receiving the props object of itself?
// Shouldn't it be able to just access it's own object?
// Ah, is it just that we wouldn't be able to just say props.todos?

// So todos is brought in via props via the attr on TodoList on the App.
// map each and give it a todo attr, so this is saying that each new Todo is added to the state?
// And so each time it's evaluated, it's mapping from the new state and giving the attr to each one.
const ParentOfList = props => {
  return (
    <div>
      {/* take both and for each one, add a todo attribute to the 
      Todo component that's about to be created in the next function*/}

      {/* mapping out each, and giving it an attribute of itself, it's own object from the array 
    Then name the child before it's born and your plans for each child, lol */}
      {props.todos.map(each => (
        <EachChild todo={each} />
      ))}
    </div>
  );
};


// parenteses because you are retuning it: return();
// {props.todos.map(each => (<Todo todo={each} />) )}


// style each Todo, add style attr and onclick attr to each div created forever
// inside the element is {task displayed from the props obj, which doesn't exist yet}
// the todo object is ???? by the map in TodoList, though 

const EachChild = props => {
  return (
    <div
      // style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      // onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};



export default App;
// import React from 'react';

// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//       </div>
//     );
//   }
// }

// export default App;

// "App js" will be where you always place your parent component of your application.
// you will need a place to store your state in this component.
import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

// Add your items for your todo list
const listtodo = [
{
task: "Book Field Trips",
id: 112233,
completed: false
},
{
task: "Post UCP",
id: 223344,
completed: false
},
{
task: "PO for Software",
id: 334455,
completed: false
},
{
task: "Resolve Withdrawals",
id: 445566,
completed: false
},
{
task: "Add to Calendar",
id: 556677,
completed: false
},
{
task: "Complete POs",
id: 667788,
completed: false
},
{
task: "Create PARs",
id: 778899,
completed: false
}
];

// Constructor with state
class App extends React.Component {
constructor() {
super();
this.state = {
listtodo
};
}


addItemthing = (e, itemTask) => {
e.preventDefault();
const listThing = this.state.listtodo.filter(
thing => thing.task === itemTask
);
if (listThing.length === 0) {
const newThing = {
task: itemTask,
id: Date.now(),
completed: false
};

this.setState({
listtodo: [...this.state.listtodo, newThing]
});
}
};

clearCompleted = e => {
e.preventDefault();
this.setState({
listtodo: this.state.listtodo.filter(thing => !thing.completed)
});
};

// List to do state
toggleItem = thingId => {
console.log("index.js: App: toggleItem: ", thingId);
console.log("index.js: App: this.state: ", this.state);
this.setState({
listtodo: this.state.listtodo.map(thing => {
if (thing.id === thingId) {
return { ...thing, completed: !thing.completed };
}
return thing;
})
});
};

// Now render your items to show your list
render() {
console.log("rendering...");
return (
<div className="App">
<h1>A Million Trillion Things To Do!</h1>
<TodoList
listtodo={this.state.listtodo}
toggleItem={this.toggleItem}
/>
<TodoForm 
addThing={this.addThing} 
clearCompleted={this.clearCompleted}
/>
</div>
);
}
}

export default App;


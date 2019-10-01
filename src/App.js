import React from 'react';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'
import  TodoList from './components/TodoComponents/TodoList'
const toDo=[]
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDo
    
    };
  }
addToDo=toDo =>{
  const newToDo={
    toDo:toDo
  }

this.setState({
  toDo:[...this.state.toDo,newToDo]});
};
render(){
  return(
    <div className='App'>
      <h1>To Do...</h1>
      <TodoForm addToDo={this.addToDo} />
      <TodoList addToDo={this.addToDo}  />
      <Todo todo={this.state.toDo}  />
    </div>
  )
}
}
//   toDoChangeHandler = event => {
//     this.setState({ toDo: event.target.value });
//   };
//   addToDOClickHandler = event => {
//     // this.setStat;
//     // let y=event.target.value
//     // console.log(y)
//     // h1.value=toDo
//   };

//   addItem = itemName => {
//     const newItem = {
//       name: itemName,
//       // id: Date.now(),
//       // purchased: false
//     };}

//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   render() {
//     return (
//       <div className="App">
//         <h2>Welcome to your Todo App!</h2>
//         <WelcomeBanner message={this.state.toDo} />

//         <input
//           type="text"
//           onChange={this.toDoChangeHandler}
//           placeholder="Things to Do.."
//         />
//         <button onClick={this.addToDOClickHandler}>AddToDo</button>
//         <FormComponent propsName={this.state.name} />
//         <ListForm addItem={this.addItem}/>
//       </div>
//     );
//   }
// // }

// const groceriesData = [];

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       // name: '',
//       groceries: groceriesData // groceries: groceries,
//     };

//   }
//   addItem = itemName => {
//     const newItem = {
//       name: itemName
     
//     };
//     this.setState({
//       groceries: [...this.state.groceries, newItem]
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Shopping List</h1>
//         <ListForm addItem={this.addItem} />

//         <GroceryList
//           groceries={this.state.groceries}
         
//         />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import ToDoForm from "./components/TodoComponents/TodoForm.js";
import ToDoList from './components/TodoComponents/TodoList.js';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoData:[
        { task: 'Organize Garage',
          id: 1528817077286,
          completed: false}
          ,
        { task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
     // inputText: '',
      newToDo: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addNewToDo = this.addNewToDo.bind(this);
  }
    changeHandler(event) {
      console.log(event.target.name)
      this.setState ({[event.target.name]: event.target.value});
    }
   

    addNewToDo(event) {
      event.preventDefault();
      const task = this.state.newToDo;
      this.setState({
        todoData: [
          ...this.state.todoData,
          { task: task,
            id: Date.now().toString(),
            completed: false
           }
        ],
        //inputText: '',
        newToDo: ''
    });
  } 
  /*
 
  */
   // changeHandler = event => {
    //  this.setState({ [event.target.name]: event.target.value });
   // };

   // addNewToDo = event => {
    //  event.preventDefault();
    //  this.setState({
    //    todoData: [
     //     ...this.state.todoData,
     //     { task: this.state.newToDo,
     //       id: Date.now(),
     //       completed: false
     //      }
     //   ],
     //   newToDo: ''
     // });
   // };
 
  render() {
    return (
      <div className="App">
        <ToDoList todoData={this.state.todoData}></ToDoList>
        <ToDoForm addNewToDo={this.state.addNewToDo} 
        changeHandler={this.state.changeHandler}
        newToDo={this.state.newToDo}
        ></ToDoForm>
      </div>
    );
  }
}
     
  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


export default App;

//lifecycle methods available to classes
/***** to define state of app *********
  1.>> include constructor calling props ----- constructor(props) {
  2.>> call super under constructor ----  super(props);
    a. super is a keyword, used to call functions on an object **Parent**
    b. super is the keywords that kicks state into gear
  3.>> then set state ----- this.state = {}
    a. this.state creates an object that holds data that represents the state of app
  
  * rendering through an array of items 
   1.>> map through state object/array -----this.state.arrayName.map(item => {return <p>{item}</p>})
    a. each child in array iterator should have unique key -----
     <p>{item}</p> turns into <p key={item}>{item}</p>

  *Destructuring 
  1.>> before return statement ---- const(arrayItems)=this.state; 
     and the map syntax transforms into arrayItems.map(item => <p key={item}>{item}</p>

***** props and proptypes *********   
    *props can be thought of as HTML attributes on react components 
    1. <component name=something>, will be referenced in render method as props.name
    2. props can be named anything  <component name=something age=19>
    *destructure prop examples
    const(name, age)=props; and then will be referenced in render method as name, age 
    3. proptype checking - makes sure the right type of data is being passed 
      a.propTypes is built into react and is used like ---------
        someFunctionTakingInProps.propType = {
           name:React.propTypes.string,
           age: React.propTypes.number,
          ----can make 'required' as a type-----
          age:React.propTypes.number.isRequired,
        }
      b. there are many types that can be checked using propTypes, see documentation
 ****** adding items to list *******
  1. >>write method name
  2. >>within method, first add event.preventDefault()
    a. preventDefault keeps the page from refreshing when button is pressed 
  3. >>go to form tag and add onSubmit ----- <form onSubmit={(event)=>{this.methodName(event)}}>
  4. >> get starting array from state, ----- const(orginalArray)=this.state
  5. >> create container for item to be added to list ----- const newItem = 'test'
    a. to make variable contents dynamic - update input tag with a ref callback - ref()
    b. <input ref ={(input)=> {this.newItem=input}}
    c. replace test with ---- const newItem = this.newItem.value
  6. >> create object to update current state ---- this.setState { orginalArray:[...this.state.orginalArray, newItem]}
    a. ... is saying pulling in the spread, or all the items from the current state
    b. to add new item to array - add comma after spread statement, followed by the variable holding the new item 
  7. To reset form ....
  8. >> add ref to form tag, and change this.newItem to this.addForm
  9. >> go back to newitemMethod, and add this.addForm.reset(); before last bracket


   
  */
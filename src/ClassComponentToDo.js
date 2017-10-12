// These are the typical imports you'll need for a React component, among others
import React, { Component } from 'react';
// import Rtable from './ToDoObjectComponent';
// import tryParse from 'json-try-parse';
import JSON5 from 'json5'
import './index.css';

//import  {data} from './ReactTable'
// Pretty typical Class declaration, except React components always extend the base React Component class
class ClassComponentToDo extends Component {
  // Just like with all other class declarations, we need a constructor and a call to super so that this
  // component can inherit some useful methods from its parent `Component` class
  constructor() {
    super();
    // {text: 'JavaScript', completed: false}
    // `this.state` represents the internal state we may want our component to persist internally
    this.state = {
      toDos: [
        {
          text: 'C#',
          completed: true
        },
        {
          text: 'Asp.Net',
          completed: false
        }
      ],
      newToDo: '',
      errors: []
    };
  }
  // A method on this class that adds a new dog to our dogNames array
  // Note how `this.setState` is used here to update the state object
  // You should NEVER by updating the state object directly; always use `this.setState` for that purpose
  addToDo = event => {
    // this.printName();
    // This `preventDefault` call here is just to prevent the default behavior of an HTML form upon submission
    event.preventDefault();
    // We create a copy of our dogNames array in state, then push a new dog name onto our copy
    const toDos = this.state.toDos;
    let o = null;
    let errors = [];
    try {
      o = JSON5.parse(this.state.newToDo);
      if (o['text'] === undefined) {
        errors.push(`>>>${this.state.newToDo}<<<< doesn't have "text" property`);
      }     
      if (o['completed'] === undefined) {
        errors.push(`>>>${this.state.newToDo}<<<< doesn't have "completed" property`);
      }
    }
    catch(e){
      errors.push(`>>>${this.state.newToDo}<<<< is not an object`);
    }
    if (errors.length) {
      this.setState({
        errors
      });
      return;
    }
    
    toDos.push(o);
    // Now we update `this.state.dogNames` with the newer copy of our dogNames array
    // We also clear the value of the newDog field so that it is ready to accept new input after a submission has been made
    this.setState({
      newToDo: '',
      toDos,
      errors
    });
  };
  toggleCompleted = event => {
    const i = event.target.name;
   // console.log(`event.target.checked: ${event.target.checked} i: ${i}`)
    const toDos = this.state.toDos;
    toDos[i].completed = !toDos[i].completed;
    //console.log(`>>>${toDos[i].completed}`)
    this.setState({
      toDos
    })
  };
  componentWillUpdate = (nextProps, nextState) => {
    //console.log('will update:', nextState)
  }
  
  handleNewToDoValueInput = event => {
    this.setState({ newToDo: event.target.value });
  };
  // Every React component needs to call the `render` method, which is inherited from the base React Component class
  render() {
    return (
      <div>
        {/* The render method can only return a single HTML element, meaning whatever we want to render
         must be wrapped inside a single base parent HTML element */}
        {/* We can write and execute plain-old JavaScript inside of JSX */}
        {/* <Rtable data={this.state.toDos} />*/}
        {this.state.toDos.map((toDo,i) => <div key={i}>
        <span className={`toDo-${toDo.completed}`}>{toDo.text}</span>
        <label>       completed?   </label>
        <input key={i} name={i} type="checkbox" className="checkBox" onChange={this.toggleCompleted}
                checked={toDo.completed}  />
        </div>)}
        {/* A form to add more dogs to our list of dogs */}
        {/* Upon submission, our form invokes our `addDog` method */}
        <form onSubmit={this.addToDo}>
          {/* Each time our input detects a change, it invokes our `handleNewDogNameInput` method */}
          {/* The newDog field on our state object will get updated as input is typed in, so we set the valu of this form to be `this.state.newDog` */}
          <input
            type="text"
            onChange={this.handleNewToDoValueInput}
            placeholder="    Add a new to do!    "
            value={this.state.newToDo}
          />
          {this.state.errors.map((error,i) => 
          < div key={i} className='error'>{error}</div>)}
        </form>
      </div>
    );
  }
}
// Lastly, we need to export our component so that it can be imported in other parts of our React app
export default ClassComponentToDo;

// react-table Cannot read property 'name' of undefined

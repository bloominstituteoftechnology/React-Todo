import React, { Component } from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Jonathan',
      todoItems: [
        {action: 'Buy Milk', done: false },
        {action: 'Dentist at 5pm', done: false },
        {action: 'Go to Gym', done: false },
      ],
      newTodo: '',
    };
  }

  updateValue = (event) => {
   this.setState({ newTodo: event.target.value });
  };

  newTodo = () => {
   this.setState({
     todoItems: [
      ...this.state.todoItems,
      { action: this.state.newTodo, done: false},
     ],
   })
  };

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
      item.action === todo.action ? {...item, done: !item.done } : item 
      ),
    })

 todoRows = () => 
    this.state.todoItems.map((item) => (
       <tr key={item.action}>
         <td>{item.action}</td>
         <td>
           <input
           type="checkbox"
           checked={item.done}
           onChange={() => this.toggleDone(item)}
           />
         </td>
       </tr>
    ));


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render =() =>(
    
     <div className="container">
       <div className="row">
         <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">{this.state.userName} To Do List
          </h2>
          </div> 
          <div className="col-12">
            <input
             className="form-control" 
            value={this.state.newToDo}
            onChange={this.updateValue}
            />

            <button className="btn-btn-primary" onClick={this.newTodo}>
              Add
             </button>

          </div>
          <div className="col-12">
            <table className="table">
              <thred>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thred>
              <tbody>{this.todoRows()}</tbody>
            </table>

          </div>
         
         </div>
       </div>
   
    
  );
}

export default App;

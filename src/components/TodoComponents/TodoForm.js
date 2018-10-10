import React from 'react';

class TodoForm extends React.Component{
  constructor( props )
  {
    super( props );
    this.addItem = this.addItem.bind( this );
  }

  addItem( e )
  {
    if( this._inputElement.value !== "")
    {
      var newItem = 
      {
        task: this._inputElement.value,
        id: Math.floor( Math.random() * 1000000000000 ),
        completed: false
      }
    }
  }
  render()
  {
      return(
        <form onSumbit = { this.addItem }>
          <input ref = { ( a ) => this._inputElement = a }
                 placeholder = "enter task">
          </input>
          <button type = "submit">add</button>
        </form>
      )
  }
}

export default TodoForm;
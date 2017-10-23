import React, { Component } from 'react';
import ToDo from './ToDo';

class App extends Component {
    constructor() {
      super();
      this.state = {
       thingToDo: '',
        listToDo: []
      };
      this.handleThingToDo = this.handleThingToDo.bind(this);
      this.handleAddObligation = this.handleAddObligation.bind(this);
    }
    handleThingToDo(event) {
      this.setState({ thingToDo: event.target.value });
    }
    handleAddObligation() {
      let obligation = this.state.thingToDo;
      const listToDo = this.state.listToDo;
      listToDo.push(obligation);
      this.setState({ listToDo, thingToDo: '' });
    }
    render() {
      return (
        <ToDo
          changeHandler={this.handleThingToDo}
          addToList={this.handleAddObligation}
          thingToDo={this.state.thingToDo}
          listToDo={this.state.listToDo}
        />
      );
    }
  }

  export default App;
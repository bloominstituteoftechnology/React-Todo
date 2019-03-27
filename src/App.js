import React from 'react';
import ReactDom from "react-dom";

class App extends React.Component {
  


  constructor(props) {
    super(props);

    this.state= {
        items: [
    {

        task: 'Create React Todo list',
        id: Date.now(),
        Completed: false
    },


{

    task: 'Practice learning more of React',
    id: Date.now() + 1,
    Completed: false
},

{
    task: 'Grocery Shopping',
    id: Date.now() + 2,
    Completed: false
},
{
    task: 'Study Time',
    id: Date.now() + 3,
    Completed: false
},

{
    task: 'Cook Dinner',
    id: Date.now() + 4,
    Completed: false

},

{
    task: 'Clean the house',
    id: Date.now() + 5,
    Completed: false
}


]
    };
  }
  render() {
    return (
             <div className = "todoListMain">
            <div className= "header">
             <form onSubmit={this.addItem}>
                    <input ref= {(a) => this._inputElemnet =a}
                    placeholder="enter task">
            </input>
            <button type ="submit">add</button>
        </form>
        </div>
        </div>
    );
}

}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);







       
       

  

export default App;

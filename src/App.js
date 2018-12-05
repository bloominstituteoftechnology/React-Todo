import React from 'react';
import {render} from "react-dom";
import Todo from "./components/TodoComponents/Todo"



const MyTitle=props=> {

    return (<h1>{props.titleContent}</h1>);

}

const Task = props =>{

const{task,completed}=props.taskProp;

 return(
    <div>
       <h4>Task:{task}</h4>
       <h4>Completed:{completed}</h4>


    </div>


 );

};


const  myArr=[


    {
        task: 'Decorate Room',
        id: 1528817077286,
        completed: "false"
    }


];






class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


    constructor() {
        super();
        this.state = {

            message: "Todo List : MVP",
            assignments:[]

        };
        this.onClick=this.onClick.bind(this);

    }

    inputHandler = (event) =>{
        this.setState({inputValue : event.target.value});
    }
    handleNewPush= (event)=>{
              event.preventDefault();
              const copyAssignments= this.state.assignments.slice();
              copyAssignments.push(
                {
                    task: this.state.inputValue,
                    id: Date.now(),
                    completed: false
                }
              );

              this.setState({assignments:copyAssignments});
              console.log(this.state)

    };

    onClick (task) {
        console.log("Main click called.")
        task.completed = true;
        this.setState({});
    }

    clearClicked = (event) => {
        event.preventDefault();
        let copyAssignments= this.state.assignments.slice();
        copyAssignments = copyAssignments.filter(task => {
            return task.completed == false;
        })
        this.setState({assignments:copyAssignments});
    }

    render() {
        console.log(this.state.assignments)
        return (
            <div>
                <MyTitle titleContent={this.state.message}/>

                <ul>
                {
                    this.state.assignments.map((task,i)  => {
                        return (<Todo onClickFn={this.onClick} key={i} taskProp ={task}/>)
                    }
                )}
                </ul>
                <form onSubmit={this.AddToDo}>
                   <input placeholder={"....Todo"} value={this.state.value} onChange={this.inputHandler} />
                   <button onClick={this.handleNewPush}>Click to Add Tasks</button>
                   <button onClick={this.clearClicked}>Clear Completed</button>
                </form>
            </div>

        );

    }





}





render(<App />, document.getElementById('root'));


export default App;

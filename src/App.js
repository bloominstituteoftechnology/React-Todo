import React from 'react';
import GoalList from "../src/components/TodoComponents/GoalList";
import GoalForm from "../src/components/TodoComponents/GoalForm";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      goals: [
        {
          task: 'Retire Financially Independent',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Travel the World',
          id: 1528817084358,
          completed: false
        }
      ],
      goal: ''
    };
  } 

    addGoal = event => {    
      event.preventDefault();
      const goals = this.state.goals.slice();
      goals.push({ task: this.state.goal,
                  completed: false, 
                  id: Date.now()
                  });
      this.setState({goals, goal:''});
    };
    
    changeGoal = event => this.setState(
      {[event.target.name]: event.target.value}
      );

      toggleGoalComplete = id => {
        let goals = this.state.goals.slice();
        goals = goals.map(goal => {
          if (goal.id === id) {
            goal.completed = !goal.completed;
            return goal;
          } else {
            return goal;
          }
        });
        this.setState({goals});
      };

      clearCompletedGoal = event => {
        event.preventDefault();
        let goals = this.state.goals.slice();
        goals = goals.filter(goal => !goal.completed);
        this.setState({goals});
      };
        

  
    render() {
      return (
        <div className='App'>          
          <GoalList 
            handleToggleComplete={this.toggleGoalComplete}
            goals={this.state.goals}
          />
          <GoalForm
            value={this.state.goal}
            handleGoalChange={this.changeGoal}
            handleAddGoal={this.addGoal}
            handleClearGoal={this.clearCompletedGoal}
          />          
        </div>        
      );
    }
}
export default App;
// ***** original app starts here *****************************************
// import React from 'react';
// import TodoList from "../src/components/TodoComponents/TodoList";
// import TodoForm from "../src/components/TodoComponents/TodoForm";


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [
//         {
//           task: 'Retire Financially Independent',
//           id: 1528817077286,
//           completed: false
//         },
//         {
//           task: 'Travel the World',
//           id: 1528817084358,
//           completed: false
//         }
//       ],
//       todo: ''
//     };
//   }

//   addTask = event => {
//     event.preventDefault();
//     const todos = this.state.todos.slice();
//     todos.push({
//       task: this.state.todo,
//       completed: false,
//       id: Date.now()
//     });
//     this.setState({ todos, todo: '' });
//   };

//   changeTask = event => this.setState(
//     { [event.target.name]: event.target.value }
//   );

//   toggleTaskComplete = id => {
//     let todos = this.state.todos.slice();
//     todos = todos.map(todo => {
//       if (todo.id === id) {
//         todo.completed = !todo.completed;
//         return todo;
//       } else {
//         return todo;
//       }
//     });
//     this.setState({ todos });
//   };

//   clearCompletedTask = event => {
//     event.preventDefault();
//     let todos = this.state.todos.slice();
//     todos = todos.filter(todo => !todo.completed);
//     this.setState({ todos });
//   };



//   render() {
//     return (
//       <div className='App'>
//         <TodoList
//           handleToggleComplete={this.toggleTaskComplete}
//           todos={this.state.todos}
//         />
//         <TodoForm
//           value={this.state.todo}
//           handleTaskChange={this.changeTask}
//           handleAddTask={this.addTask}
//           handleClearTask={this.clearCompletedTask}
//         />
//       </div>
//     );
//   }
// }
// export default App;
//**** original app ends here ***************************************************/
 // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // making new array
        //old data from old array
        //new task from this state
        //   this.setState({
        //     tasks: [
        //       ...this.state.tasks,
        //       {taskName: this.state.inputText}
        //     ],
        //     inputText: ''
        //   });
        // }
// handleChange = event => {
//   this.setState({
//     [event.target.name]: event.target.value
//   });
//   console.log(event.target.name);
// }
// <TodoForm
//   addTask={this.addTask}
//   inputText={this.state.inputText}
//   handleChange={this.handleChange}
// />
// // <Todo />
// const taskData = [
//   { taskName: '' },
// ];
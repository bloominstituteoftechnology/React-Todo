import React from "react";

function Task({ item }) {
    console.log(item);
  return (
        <div className="task">
            <ul>
                <h3><li>{item.task}</li></h3>
            </ul>
    </div>
  );
}

export default Task;



// class HogwartsStudents extends React.Component {
//     constructor() {
//       super();
//       // state === data (what our data looks like at any given point... what
//       // is the "state" of my data right now)
//       // this state object is the "brain" of the component tree
//       // this is NOT muttable - we will change "state" following immutability principles
//       this.state = {
//         studentList: students,
//         name: '',
//         identity: '',
//         img: '',
//         age: '',
//         bestFriend: ''
//       };
//     }
  
//     handleChanges = event => {
//       console.log('event: ', event.target);
//       // update the name property on state
//       this.setState({
//         [event.target.name]: event.target.value
//       });
//     };
  
//     updateList = event => {
//       event.preventDefault();
//       const newStudent = {
//         name: this.state.name,
//         identity: this.state.identity,
//         img: this.state.img,
//         age: this.state.age,
//         bestFriend: this.state.bestFriend
//       };
      
//       this.setState({
//         studentList: [...this.state.studentList, newStudent]
//       });
//     };
  
//     // const studentList = students;
//     render() {
//       // this.state.studentList.push({ name: 'Neville' });
//       return (
//         <div className="HogwartsStudents-wrapper">
//           <h1>{this.props.title}</h1>
  
//           <div className="class-list">
//             {this.state.studentList.map((studentFromMap, index) => (
//               <Student key={index} studentProp={studentFromMap} />
//             ))}
//           </div>
//           <StudentForm
//             name={this.state.name}
//             identity={this.state.identity}
//             img={this.state.img}
//             age={this.state.age}
//             bestFriend={this.state.bestFriend}
//             handleChanges={this.handleChanges}
//             updateList={this.updateList}
//           />
//         </div>
//       );
//     }
//   }
  
//   export default HogwartsStudents;
  
import React from 'react';
import BasicComponent from "./components/BasicComponent";
import ClassComponentUpdatingState from "./components/ClassComponentUpdatingState";
import ParentComponent from "./components/ParentComponent";

const App = () => (
  <div>
    <BasicComponent />
    <ClassComponentUpdatingState/>
    <ParentComponent />
    <h2>Todo App</h2>

  </div>
);

export default App;

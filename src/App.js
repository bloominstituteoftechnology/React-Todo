import React from "react";
import List from "./components/List";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>To Do App</h2>
    <List />
  </div>
);

export default App;

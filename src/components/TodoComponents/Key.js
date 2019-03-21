import React from "react";


const Key = props => {
    return (
        <div class="key">
        {/* <h3>Key:</h3> */}
        <div class = "type">
            <div class= "colorPicker1"></div>
            <p>Work</p>
        </div>
        <div class = "type">
            <div class= "colorPicker2"></div>
            <p>Home</p>
        </div>
        <div class = "type">
            <div class= "colorPicker3"></div>
            <p>Chores</p>
        </div>
    </div>
  );
};

export default Key;
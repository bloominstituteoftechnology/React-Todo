import React from "react";

function UserForm(props) {
  return (
    <form>
      <input />
      <button
        onClick={event => {
          event.preventDefault();
          console.log("1");
          props.addUser(event);
        }}
      >
        {" "}
        {props.text}{" "}
      </button>
    </form>
  );
}

export default UserForm;

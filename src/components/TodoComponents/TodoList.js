// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <div id="myDIV" className="header">
          <h2>My To Do List</h2>
          <input type="text" id="myInput" placeholder="Title..." />
          <span onclick="newElement()" className="addBtn">
            Add
          </span>
        </div>
        <ul id="myUL">
          <li>Learn setState()</li>
          <li className="checked">Style my Todo list</li>
          <li>Learn React</li>
          <li>Virtual DOM re-write</li>
          <li>Build Todo App</li>
        </ul>
      </div>
    );
  }
});

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("");
  } else {
    document.getElementById("Todo").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

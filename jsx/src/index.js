// import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  const buttonText = "Click on Me!";
  return buttonText;
}
// Create a React component
const App = () => {
  const buttonText = { text: "Click on Me!" };
  const labelText = "Enter Name: ";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

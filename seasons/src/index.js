import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //this function is very specific to Javascript and not to React
  //it is the very first function that will be called and this the place where we need to initialize state
  //overriding React.Component's constructor, otherwise we'll see a msg - super not called
  constructor(props) {
    //ceremonial step - have to do it
    super(props);
    //iniitialization- THIS IS THE ONLY TIME we do direct assignment
    //state is a SPECIAL KEYWORD, can't use myState
    this.state = { lat: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState!!!!!!! anytime we want to update our state
        this.setState({ lat: position.coords.latitude });
        //we donot want to do direct assignment to our state object
        //this.state.lat = position.coords.latitude -> this is WRONG
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was re-rendered");
  }

  //React says we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

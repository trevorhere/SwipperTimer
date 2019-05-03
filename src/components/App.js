import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Holdable, Swipeable, defineSwipe } from "react-touch";
import SW from "./SW";

class App extends Component {
  render() {
    const swipe = defineSwipe({ swipeDistance: 50 });

    let deleteEmail = () => {
      console.log();
    };

    return (
      <div className="App">
        <SW />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Swipe from "react-easy-swipe";

class SW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      nodes: [
        {
          text: "Get Started",
          className: {
            justifyContent: "center",
            alignItems: "center",

            width: "100%",
            height: "100vh",
            background: "#EE7674",
            fontSize: "3em"
          }
        },
        {
          text: "Projects",
          className: {
            width: "100%",
            height: "100vh",
            background: "#75B9BE",
            fontSize: "3em"
          }
        },
        {
          text: "Times",
          className: {
            width: "100%",
            height: "100vh",
            background: "#D0D6B5",
            fontSize: "3em"
          }
        },
        {
          text: "Stop/Start",
          className: {
            width: "100%",
            height: "100vh",
            background: "#F9B5AC",
            fontSize: "3em"
          }
        }
      ]
    };
  }
  onSwipeStart(event) {
    console.log("Start swiping...", event);
  }

  onSwipeMove(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`, event);
    console.log(`Moved ${position.y} pixels vertically`, event);
  }

  onSwipeEnd(event) {
    console.log("End swiping...", event);
  }

  setPosition = adjust => {
    const { position, nodes } = this.state;
    let adjustment = position;
    console.log("init pos", adjustment);
    console.log("swipe d", adjust);

    switch (adjust) {
      case "right": {
        adjustment -= 1;
        break;
      }
      case "left":
        adjustment++;
        break;
    }

    if (adjustment >= nodes.length || adjustment < 0) {
      console.log("adjustment hit");
      adjustment = 0;
    }

    console.log(" pos: ", adjustment);

    this.setState({
      position: adjustment
    });
  };

  render() {
    const box = {
      justifyContent: "center"
    };
    const boxStyle1 = {
      width: "100%",
      height: "100vh",
      background: "#EE7674",
      fontSize: "3em"
    };
    const boxStyle2 = {
      width: "100%",
      height: "100vh",
      background: "#75B9BE",
      fontSize: "3em"
    };
    const boxStyle3 = {
      width: "100%",
      height: "100vh",
      background: "#D0D6B5",
      fontSize: "3em"
    };
    const boxStyle4 = {
      width: "100%",
      height: "100vh",
      background: "#F9B5AC",
      fontSize: "3em"
    };

    const { position, nodes } = this.state;
    console.log("nodes", nodes);
    return (
      <Swipe
        // onSwipeStart={this.onSwipeStart}
        // onSwipeMove={this.onSwipeMove}
        // onSwipeEnd={this.onSwipeEnd}
        onSwipeLeft={() => this.setPosition("left")}
        onSwipeRight={() => this.setPosition("right")}
      >
        <div style={nodes[position].className}>{nodes[position].text}</div>
      </Swipe>
    );
  }
}
export default SW;

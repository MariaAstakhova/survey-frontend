import React, { Component } from "react";
import "../global.css";

export default class TopicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }

  render() {
    return (
      <button
        className="topicButton"
        style={{ backgroundColor: this.state.isOn ? "blue" : "pink" }}
        onClick={() => this.handleClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

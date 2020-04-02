import React, { Component } from "react";
import "../global.css";

export default class TopicButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="topicButton"
        style={{ backgroundColor: this.props.isOn ? "blue" : "pink" }}
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

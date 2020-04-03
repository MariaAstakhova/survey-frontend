import React, { Component } from "react";
import "../global.css";

function TopicButton(props) {
  return (
    <button
      className="topicButton"
      style={{ backgroundColor: props.isOn ? "blue" : "pink" }}
      onClick={() => props.onClick()}
    >
      {props.topic}
    </button>
  );
}
export default TopicButton;

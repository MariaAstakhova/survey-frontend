import React, { Component } from "react";

let topicsToDisplay = [];

export default class DisplayQuestions extends Component {
  render() {
    let topics = this.props.topics;
    if (topics != null) {
      for (let i = 0; i < topics.length; i++) {
        topicsToDisplay.push(
          <div key={"topicNum" + { i }}>Topic: {JSON.stringify(topics[i])}</div>
        );
      }
    }

    return topicsToDisplay;
  }
}

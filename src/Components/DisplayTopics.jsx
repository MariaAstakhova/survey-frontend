import React, { Component } from "react";
import "../global.css";
import TopicButton from "../Components/TopicButton";

let topicsToDisplay = [];

export default class DisplayQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    let topics = this.props.topics;
    if (topics != null) {
      for (let i = 0; i < topics.length; i++) {
        var jsonString = JSON.stringify(topics[i].topicText);
        var jsonObject = JSON.parse(jsonString);
        topicsToDisplay.push(
          <div>
            <TopicButton value={jsonObject} />
          </div>
        );
      }
    }

    return (
      <div>
        <div>{topicsToDisplay}</div>
        <div>
          <button className="submitButton"> Submit</button>
        </div>
      </div>
    );
  }
}

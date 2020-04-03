import React, { Component } from "react";
import "../global.css";
import TopicButton from "../Components/TopicButton";

let topicsToDisplay = [];

export default class DisplayQuestions extends Component {
  constructor(props) {
    super(props);
  }

  renderQuestionnaires(i) {
    if (this.props.topics != null) {
      for (let i = 0; i < this.props.topics.length; i++) {
        var jsonString = JSON.stringify(this.props.topics[i].topicText);
        var jsonObject = JSON.parse(jsonString);
        topicsToDisplay.push(jsonObject);
      }
    }
    return (
      <TopicButton
        topic={topicsToDisplay[i]}
        isOn={this.props.clicked[i]}
        onClick={() => this.props.OnClick(i)}
      />
    );
  }

  // handleClick() {
  //   this.setState(prevState => ({
  //     isOn: !prevState.isOn
  //   }));
  // }

  render() {
    let result = [];
    for (let i = 0; i < 2; i++) {
      result.push(this.renderQuestionnaires(i));
    }

    return (
      <div>
        <div>{result}</div>
        <div>
          <button className="submitButton"> Submit</button>
        </div>
      </div>
    );
  }
}

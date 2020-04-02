import React, { Component } from "react";
import "../global.css";
import TopicButton from "../Components/TopicButton";

let topicsToDisplay = [];

export default class DisplayQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      clicked: Array()
    };
  }

  // handleClick() {
  //   this.setState(prevState => ({
  //     isOn: !prevState.isOn
  //   }));
  // }

  handleClick(i) {
    const clicked = this.state.clicked.slice();
    clicked[i] = !clicked[i];
    this.setState({ clicked: clicked });
  }

  render() {
    let topics = this.props.topics;
    if (topics != null) {
      for (let i = 0; i < topics.length; i++) {
        var jsonString = JSON.stringify(topics[i].topicText);
        var jsonObject = JSON.parse(jsonString);
        this.state.clicked.push(false);
        topicsToDisplay.push(
          <div>
            <TopicButton
              value={jsonObject}
              isOn={this.state.clicked[i]}
              onClick={() => this.handleClick(i)}
            />
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

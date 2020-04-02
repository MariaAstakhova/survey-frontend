import React, { Component } from "react";

let questionsToDisplay = [];

export default class DisplayQuestions extends Component {
  render() {
    let questions = this.props.questions;
    if (questions != null) {
      for (let i = 0; i < questions.length; i++) {
        questionsToDisplay.push(
          <div key={"questionNum" + { i }}>
            Question: {JSON.stringify(questions[i].topic)}
          </div>
        );
      }
    }

    return questionsToDisplay;
  }
}

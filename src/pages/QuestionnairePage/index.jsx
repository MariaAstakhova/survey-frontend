import React, { Component } from "react";
import getTopics from "../../Services/getTopics";
import DisplayTopics from "../../Components/DisplayTopics";

export default class QuestionnairePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: null
    };
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <p>Your Survey</p>
        </header>
      </div>
    );
  }
}

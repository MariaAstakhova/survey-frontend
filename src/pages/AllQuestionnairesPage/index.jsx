import React, { Component } from "react";
import getTopics from "../../Services/getTopics";
import DisplayTopics from "../../Components/DisplayTopics";

let topicsToDisplay = [];

export default class AllQuestionnairesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: null,
      clicked: Array()
    };
  }

  async callServices() {
    await getTopics().then(topicList => {
      this.setState({ topicList });

      var fillWithFalse = Array(topicList.length).fill(false);
      this.setState({ clicked: fillWithFalse });
    });
  }

  componentDidMount() {
    this.callServices();
  }

  getQuestionnaires() {
    return "/questions";
  }

  handleClick(i) {
    const clicked = this.state.clicked.slice();
    clicked[i] = !clicked[i];

    this.setState({
      clicked: clicked
    });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <p>Survey App</p>
        </header>
        <div>
          <DisplayTopics
            topics={this.state.topicList}
            clicked={this.state.clicked}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <form action={this.getQuestionnaires()}>
          <div>
            <button type="submit">Do survey</button>
          </div>
        </form>
      </div>
    );
  }
}

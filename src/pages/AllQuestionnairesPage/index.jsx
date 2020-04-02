import React, { Component } from "react";
import getTopics from "../../Services/getTopics";
import DisplayTopics from "../../Components/DisplayTopics";

export default class AllQuestionnairesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: null
    };
  }

  async callServices() {
    await getTopics().then(topicList => {
      this.setState({ topicList });
    });
  }

  componentDidMount() {
    this.callServices();
  }

  getQuestionnaires() {
    return "/questions";
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <p>Survey App</p>
        </header>
        <div>
          <DisplayTopics topics={this.state.topicList} />
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

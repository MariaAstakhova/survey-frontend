import React, { Component } from "react";
import getQuestions from "../../Services/getQuestions";
import DisplayQuestions from "../../Components/DisplayQuestions";

export default class AllQuestionnairesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: null
    };
  }

  async callServices() {
    await getQuestions().then(questionList => {
      this.setState({ questionList });
    });
  }

  componentDidMount() {
    this.callServices();
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>Survey App</p>
        </header>
        <div>
          <DisplayQuestions questions={this.state.questionList} />
        </div>
      </div>
    );
  }
}

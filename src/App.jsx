import React, { Component } from "react";
import "./App.css";
import getQuestions from "./Services/getQuestions.jsx";
import DisplayQuestions from './Components/DisplayQuestions.jsx'

export default class App extends Component {
  constructor() {
    super();

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
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>
          <DisplayQuestions questions={this.state.questionList}/>
        </div>
      </div>
    );
  }
}

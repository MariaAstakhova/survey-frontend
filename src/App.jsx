import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AllQuestionnairesPage from "./pages/AllQuestionnairesPage";
import QuestionnairePage from "./pages/QuestionnairePage";

export default class App extends Component {
  render() {
    return (
      <>
        <main id="main-content">
          <Router>
            <Route path="/dashboard" component={AllQuestionnairesPage} />
            <Route path="/questions" component={QuestionnairePage} />
          </Router>
        </main>
      </>
    );
  }
}

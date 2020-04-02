import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AllQuestionnairesPage from "./pages/AllQuestionnairesPage";

export default class App extends Component {
  render() {
    return (
      <>
        <main id="main-content">
          <Router>
            <Route path="/" component={AllQuestionnairesPage} />
          </Router>
        </main>
      </>
    );
  }
}

import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import cv from "./precious_abubakar_dev.pdf";

import sharedData from "./data/portfolio_shared_data.json";
import resumeData from "./data/res_primaryLanguage.json";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: resumeData,
      sharedData: sharedData,
    };
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div style={{ display: "inline" }}>
            <a href={cv} download="preciousAbubakarResume" style={{ color: "#353239" }}>
              <span
                className="iconify"
                data-icon="ic:baseline-save-alt"
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
              <p style={{ fontSize: 13 }}>Download Resume</p>
            </a>
          </div>
        </div>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;

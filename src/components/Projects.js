import React, { Component } from "react";

import ZcModal from "./ZcModal.js";
import HtModal from "./HtModal.js";
import GameModal from "./gameModal";

import zcLogo from "./images/zcLogo.svg";
import htLogo from "./images/homeTeach.jpg";
import game from "./images/game.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      zcModalShow: false,
      htModalShow: false,
      gameModalShow: false,

    };
  }

  render() {
    let zcModalShow = (data) => {
      this.setState({ zcModalShow: true, deps: data });
    };
    let htModalShow = (data) => {
      this.setState({ htModalShow: true, deps: data });
    };
    let gameModalShow = (data) => {
      this.setState({ gameModalShow: true, deps: data });
    };

    let zcModalClose = () => this.setState({ zcModalShow: false });
    let htModalClose = () => this.setState({ htModalShow: false });
    let gameModalClose = () => this.setState({ gameModalShow: false });

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>PROJECTS</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                style={{ cursor: "pointer" }}
              >
                <span className="portfolio-item d-block">
                  <div className="foto" onClick={() => zcModalShow()}>
                    <div>
                      <img
                        src={zcLogo}
                        alt="projectImages"
                        height="230"
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                        }}
                      />
                      <span className="project-date">2021</span>
                      <br />
                      <p className="project-title-settings mt-3">Zuri Chat</p>
                    </div>
                  </div>
                </span>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                style={{ cursor: "pointer" }}
              >
                <span className="portfolio-item d-block">
                  <div className="foto" onClick={() => htModalShow()}>
                    <div>
                      <img
                        src={htLogo}
                        alt="projectImages"
                        height="230"
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                        }}
                      />
                      <span className="project-date">2021</span>
                      <br />
                      <p className="project-title-settings mt-3">HomeTeach</p>
                    </div>
                  </div>
                </span>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                style={{ cursor: "pointer" }}
              >
                <span className="portfolio-item d-block">
                  <div className="foto" onClick={() => gameModalShow()}>
                    <div>
                      <img
                        src={game}
                        alt="projectImages"
                        height="230"
                        width="230"
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                        }}
                      />
                      <span className="project-date">2021</span>
                      <br />
                      <p className="project-title-settings mt-3">Rock - Paper - Scissors</p>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            
          </div>
          <ZcModal
            show={this.state.zcModalShow}
            onHide={zcModalClose}
            data={this.state.deps}
          />
          <HtModal
            show={this.state.htModalShow}
            onHide={htModalClose}
            data={this.state.deps}
          />
          <GameModal
            show={this.state.gameModalShow}
            onHide={gameModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;

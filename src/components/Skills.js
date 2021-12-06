import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">SKILLS</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">
              <li className="list-inline-item mx-3">
                <span>
                  <div className="text-center skills-tile">
                    <i className="devicon-html5-plain" style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        HTML 5
                      </p>
                    </i>
                  </div>
                </span>
              </li>
              <li className="list-inline-item mx-3">
                <span>
                  <div className="text-center skills-tile">
                    <i className="devicon-css3-plain" style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        CSS 3
                      </p>
                    </i>
                  </div>
                </span>
              </li>
              <li className="list-inline-item mx-3">
                <span>
                  <div className="text-center skills-tile">
                    <i className="devicon-javascript-plain" style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        JavaScript
                      </p>
                    </i>
                  </div>
                </span>
              </li>
              <li className="list-inline-item mx-3">
                <span>
                  <div className="text-center skills-tile">
                    <i className="devicon-react-plain" style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        ReactJs
                      </p>
                    </i>
                  </div>
                </span>
              </li>
              <li className="list-inline-item mx-3">
                <span>
                  <div className="text-center skills-tile">
                    <i className="devicon-git-plain" style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        Git 
                      </p>
                    </i>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

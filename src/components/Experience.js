import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                EXPERIENCE
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="08.2021 - 10.2021"
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fab fa-react experience-icon"></i>}
            >
              <div style={{ textAlign: "left", marginBottom: "4px" }}>
                <Badge pill className="main-badge mr-2 mb-2">
                  ReactJs
                </Badge>
              </div>

              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                HNG Internship
              </h4>
              <div style={{ textAlign: "left", marginTop: "15px" }}>
                <Badge pill className="experience-badge mr-2 mb-2">
                  JavaScript
                </Badge>
                <Badge pill className="experience-badge mr-2 mb-2">
                  TailwindCSS
                </Badge>
                <Badge pill className="experience-badge mr-2 mb-2">
                  HeadlessUI
                </Badge>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="09.2021 - 12.2021"
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fab fa-react experience-icon"></i>}
            >
              <div style={{ textAlign: "left", marginBottom: "4px" }}>
                <Badge pill className="main-badge mr-2 mb-2">
                  ReactJs
                </Badge>
              </div>

              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                Junior developer/Community Manager
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Zuri Chat
              </h4>
              <div style={{ textAlign: "left", marginTop: "15px" }}>
                <Badge pill className="experience-badge mr-2 mb-2">
                  JavaScript
                </Badge>
                <Badge pill className="experience-badge mr-2 mb-2">
                  TailwindCSS
                </Badge>
                <Badge pill className="experience-badge mr-2 mb-2">
                  Styled Components
                </Badge>
                <Badge pill className="experience-badge mr-2 mb-2">
                  HeadlessUI
                </Badge>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;

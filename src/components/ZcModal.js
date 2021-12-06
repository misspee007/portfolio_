import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

import zcChess from "./images/zcChess.png";
import zuri from "./images/zcManageDAO.png";
import zuri2 from "./images/zcVirtualWorkspaces.png";

class ZcModal extends Component {
  render() {
    var img = [zcChess, zuri, zuri2].map((elem, i) => {
      return <div data-src={elem} />;
    });
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              Zuri Chat
              <a
                href="https://www.zuri.chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            </h3>
            <p className="modal-description">
              An open source messaging platform that will power remote work in
              the Web3 future and make it feel as good as sitting across the
              desk from your friends. Zuri chat offers games, music and more
              functionality via a plugin system. Zuri Chat is powered by diverse
              technologies including GoLang, Python and NodeJS, but I worked
              with the ReactJS teams.
            </p>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ZcModal;

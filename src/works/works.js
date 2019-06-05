import React, { Component } from "react";
import WORKS from "../data/works";

import "./works.css";

class Works extends Component {
  render() {
    return (
      <div>
        <div>
          {WORKS.map(WORK => {
            return (
              <div className="works">
                {/* <div key={WORK.id}>{WORK.title}</div> */}
                <div style={leftSideStyle}>
                  <img alt="" src={WORK.image} style={imageStyle} />
                  <button style={buttonStyle}>Buy Now</button>
                </div>
                <div
                  className="worksDescAndSummary"
                  style={worksDescAndSummary}
                >
                  <div className="title">{WORK.title}</div>
                  <div style={descriptionStyle}>{WORK.description}</div>
                  <hr />
                  <div>{WORK.summary}</div>
                  <hr />
                  <div>{WORK.summary2}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="fb-like"
          data-href="https://www.facebook.com/4th-Culture-1081120605362372/"
          data-width=""
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-show-faces="true"
          data-share="true"
        />
      </div>
    );
  }
}

const imageStyle = {
  display: "flex",
  width: 200,
  marginBottom: 30,
  alignSelf: "center"
};
const leftSideStyle = {
  display: "flex",
  flexDirection: "column"
};
const worksDescAndSummary = {
  display: "flex",
  flexDirection: "column",
  width: "50%"
};

const buttonStyle = {
  margin: 20,
  height: 50,
  width: 250,
  alignSelf: "center",
  padding: 10,
  backgroundColor: "#008000",
  color: "#FFFFFF",
  borderRadius: 5,
  border: "none"
};

const descriptionStyle = {
  fontStyle: "italic"
};

export default Works;

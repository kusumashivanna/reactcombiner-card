import React, { Component } from "react";
import "./Card1.css";
export default class Card1 extends Component {
  onClick = url => {
    this.props.history.push("/profile");
    this.props.getprofile(url);
  };

  render() {
    console.log(this.props,"data------");
    return (
      <div className="container">
        <img src={this.props.logo} class="img" />
        <div class="bottom-left">
          <h2>{this.props.header1}</h2>
          <i class="icon">
            <img src={this.props.logo2} style={{ width: "5%", height: "5%" }} />
          </i>
          <span>{this.props.foot1}</span>
        </div>
        <div class="top-left">
          <button class="round3" onClick={() => this.onClick(this.props.url)}>
            {"Domestic"}
          </button>
        </div>
      </div>
    );
  }
}

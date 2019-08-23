import React, { Component } from "react";
import "./Card2.css";
export default class Card2 extends Component {
  render() {
    return (
      <div className="card3">
        <div class="container3">
          <img src={this.props.girllogo} alt="Avatar" class="avatar" />
          <h1>{this.props.f1}</h1>
          <p class="title">{this.props.f2}</p>
          <p class="round2" onClick={() => this.onClick(this.props.url)}>
            {"ux designer"}
          </p>
          <div />
        </div>
      </div>
    );
  }
}

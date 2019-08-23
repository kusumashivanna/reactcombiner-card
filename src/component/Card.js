import React, { Component } from "react";
import logo1 from "../img/16.jpg"
import logo2 from "../img/4.jpg";
import Card1 from "./Card1";
export default class Card extends Component {
  componentDidMount = () => {
    this.props.getCardData();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div>Redux training</div>
        <hr />
        {this.props.cardData &&
          this.props.cardData.cardData &&
          this.props.cardData.cardData.length>0 &&
          this.props.cardData.cardData.map(card => {
            return (
              <div>
                <div>
                  <Card1
                    history={this.props.history}
                    logo={logo1}
                    header1={card.id}
                    url={card.url}
                    getprofile={this.props.getProfile}
                    foot1={"Democractic Republic of the congo"}
                    logo2={logo2}
                    link1={card.login}
                  />
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

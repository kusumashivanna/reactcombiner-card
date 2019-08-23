import React, { Component } from "react";
import girllogo from "../img/1.png";
import name1 from "../img/2.png";
import name2 from "../img/3.png";
import name3 from "../img/4.png";
import name4 from "../img/5.png";
import twitter from "../img/3.jpg";
import driddle from "../img/2.jpg";
import linked from "../img/1.jpg";
import logo from "../img/17.jpg";
import logo1 from "../img/16.jpg";
import logo2 from "../img/4.jpg";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card1 from "./Card1";
export default class Card extends Component {
  render() {
    return (
      <div>
        <Card1
          logo={logo1}
          header1={"Fishing in the congo"}
          foot1={"Democractic Republic of the congo"}
          logo2={logo2}
          link1={"domestic"}
        />

        <br />
        <Card2
          logo={logo}
          header={"No penalty on withdrawal from your fixed deposit "}
          foot={
            "On first partual withdrawal upto 25% of your original FD principle value"
          }
          link={"KNOW MORE"}
        />
        <br />
        <Card3
          girllogo={girllogo}
          mname={"Alexndra Dadario"}
          title1={"Parker Industries"}
          design1={"UX DESIGNER"}
          collob1={"USUALLY COLLABORATED WITH"}
          name1={name1}
          name2={name2}
          name3={name3}
          name4={name4}
          twitter={twitter}
          driddle={driddle}
          linked={linked}
        />
        <br />
      </div>
    );
  }
}

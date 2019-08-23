import React, { Component } from "react";
import Card2 from "./component/Card2.js";
export default class Profile extends Component {
  render() {
    console.log("sfsdf",this.props);
    return (
      <div>
        <div>Redux training</div>
        <hr />
        {this.props.profileData && (
          <Card2
            girllogo={this.props.profileData.avatar_url}
            mname={this.props.profileData.login}
            url={this.props.profileData.url}
            history={this.props.profileData.history}
          />
        )}
      </div>
    );
  }
}

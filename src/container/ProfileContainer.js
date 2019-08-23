import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Profile from "../Profile.js";
import { profile } from "../action/profile.action.js";

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: () => {
      dispatch(profile());
    }
  };
};
const mapStateToProps = state => {
  return {
    profileData: state.profileReducer.ProfileData
  };
};

const ProfileConatiner = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
export default ProfileConatiner;

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "../component/Card.js";
import { getCardData } from "../action/card.action.js";
import { profile } from "../action/profile.action.js";
const mapDispatchToProps = dispatch => {
  return {
    getCardData: () => {
      dispatch(getCardData());
    },

    getProfile: url => {
      dispatch(profile(url));
    }
  };
};
const mapStateToProps = state => {
  return {
    cardData: state.cardReducer
  };
};

const CardConatiner = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Card)
);
export default CardConatiner;

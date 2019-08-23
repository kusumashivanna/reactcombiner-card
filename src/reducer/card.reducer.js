import * as userAction from "../action/card.action";
const CardData = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.status) {
    case userAction.REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case userAction.SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        cardData: action.cardData
      });

    case userAction.FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        cardError: action.cardError
      });
    default:
      return state;
  }
};
export default CardData;

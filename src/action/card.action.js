export const SUCCESS = "SUCCESS";
export const REQUEST = "REQUEST";
export const FAILURE = "FAILURE";
export const GET_CARD_REQUEST = "GET_CARD_REQUEST";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";
export const GET_CARD_FAILURE = "GET_CARD_FAILURE";

export function getCardRequest() {
  return {
    type: GET_CARD_REQUEST,
    status: REQUEST
  };
}

export function getCardSuccess(data) {
  return {
    type: GET_CARD_SUCCESS,
    status: SUCCESS,
    cardData: data
  };
}

export function getCardFailure(error) {
  return {
    type: GET_CARD_FAILURE,
    status: FAILURE,
    cardError: error
  };
}

export function getCardData() {
  return async dispatch => {
    dispatch(getCardRequest());
    try {
      const result = await fetch("https://api.github.com/users");
      const resultJson = await result.json();
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(getCardSuccess(resultJson));
    } catch (e) {
      dispatch(getCardFailure(e.message));
    }
  };
}

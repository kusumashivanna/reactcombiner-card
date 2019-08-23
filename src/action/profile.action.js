export const SUCCESS = "SUCCESS";
export const REQUEST = "REQUEST";
export const FAILURE = "FAILURE";
export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export function getProfileRequest() {
  return {
    type: GET_PROFILE_REQUEST,
    status: REQUEST
  };
}

export function getProfileSuccess(data) {
  return {
    type: GET_PROFILE_SUCCESS,
    status: SUCCESS,
    profileData: data
  };
}

export function getProfileFailure(error) {
  return {
    type: GET_PROFILE_FAILURE,
    status: FAILURE,
    profileError: error
  };
}

export function profile(url) {
  return async dispatch => {
    dispatch(getProfileRequest());
    try {
      const result = await fetch(`${url}`);
      const resultJson = await result.json();
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(getProfileSuccess(resultJson));
    } catch (e) {
      dispatch(getProfileFailure(e.message));
    }
  };
}

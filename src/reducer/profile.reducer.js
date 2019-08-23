import * as userAction from "../action/profile.action.js";
const ProfileData = (
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
        ProfileData: action.profileData
      });

    case userAction.FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        ProfileError: action.profileError
      });
    default:
      return state;
  }
};
export default ProfileData;

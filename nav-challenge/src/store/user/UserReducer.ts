import { UserDataType } from "../../utils/types/UserDataType";

import { SIGNUP_USER } from "./UserActionTypes";

const initialState: UserDataType = {
  currentUser: {
    token: "",
    username: "",
    firstName: "",
    lastName: "",
    userId: 0,
    email: "",
    isInfluencer: false,
    hasSelectedInfluencers: false,
    country: "",
    city: "",
    bio: "",
    jobTitle: "",
    numberOfFollowers: "",
    numberOfFollowings: "",
    profileImage: "",
    coverImage: "",
  },
};

const userReducer = (state = initialState, action: any = {}): UserDataType => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;

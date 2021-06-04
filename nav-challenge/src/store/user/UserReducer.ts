import { UserDataType } from "../../utils/types/UserDataType";
import {
  SIGNUP_USER,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_SUCCESS,
} from "./UserActionTypes";

const initialState: UserDataType = {
  currentUser: {
    token: "",
    username: "",
    first_name: "SASA",
    last_name: "",
    user_id: 0,
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

const user = (state = initialState, action: any = {}): UserDataType => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default user;

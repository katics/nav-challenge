import { UserDataType } from "../../utils/types/UserDataType";
import { AppState } from "../../store/AppProvider";

//TODO check state type and retyrn type
export const userSelector = (state: any): any => {
  return state.userReducer;
};

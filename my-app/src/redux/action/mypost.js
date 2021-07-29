import ActionType from "../../constans";
import createAction from "./index";
import { toast } from "react-toastify";

export const setMyPost = (value) => async (dispatch) => {
  toast.success("Post success!");
  return dispatch(createAction(ActionType.SET_MY_POST, value));
};


export const updateMyPost = (value) => async (dispatch) => {
  toast.success("Update post success!");
  return dispatch(createAction(ActionType.UPDATE_MY_POST, value));
};
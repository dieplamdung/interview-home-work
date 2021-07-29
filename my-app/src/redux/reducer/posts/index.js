import ActionType from "../../../constans";

const initialState = {
  postList: [],
  totalPage:1,
  currentPage:0,
  valueSearch:""
};

const reducer = (state = initialState, action) => {
  let newPostList ={};
  switch (action.type) {
    case ActionType.GET_POST_LIST:
      console.log(action)
      newPostList = {
        ...state,
        totalPage:action.payload.length,
        postList:action.payload.splice(0,10),
      }
      return {
       ...newPostList,
      };

    case ActionType.GET_POST_LIST_SEARCH:
      console.log("action",action)
      newPostList = {
        ...state,
        totalPage:action.payload.length,
        postList:action.payload.splice(0,10),
      }
      return {
        ...newPostList
      };
      case ActionType.GET_POST_LIST_PAGE:
        console.log("action",action)
      newPostList = {
        ...state,
        postList:action.payload,
      }
      return {
        ...newPostList
      };
      case ActionType.SET_VALUE_SEARCH:
      console.log("====",action)
      newPostList = {
        ...state,
        valueSearch:action.payload,
      }
      return {
        ...newPostList
      };
    default:
      return state;
  }
};

export default reducer;

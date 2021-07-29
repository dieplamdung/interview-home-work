import ActionType from "../../../constans";

let myPost = JSON.parse(localStorage.getItem("myPost"))

const initialState = {
  myPostList: myPost || []
};

function findIndex(state,param) {
  let result;
  state.map((elm, index)=>{
    if(elm.id===param.id){
      result = index
    }
    return elm;
  })
  return result
}

const reducerMyPost = (state = initialState, action) => {
  let newMyPost;
  switch (action.type) {
    case ActionType.SET_MY_POST:
      newMyPost = [
        ...state.myPostList,
        action.payload
      ]
      localStorage.setItem("myPost", JSON.stringify(newMyPost))
      return {
        myPostList: newMyPost
      };
      case ActionType.UPDATE_MY_POST:

      let index = findIndex(state.myPostList,action.payload);
      state.myPostList.splice(index, 1, action.payload)
        newMyPost = [
          ...state.myPostList
        ]
        localStorage.setItem("myPost", JSON.stringify(newMyPost))
        return {
          myPostList: newMyPost
        };

    default:
      return state;
  }
};

export default reducerMyPost;

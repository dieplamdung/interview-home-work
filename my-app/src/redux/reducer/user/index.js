import ActionType from "../../../constans";

const User = localStorage.getItem("user");

const initialState = {
    User: User
};

const login = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.GET_USER:
      let newUser = action?.payload?.username;
      localStorage.setItem("user",newUser)
      return {
        User:newUser
      };
    default:
      return state;
  }
};

export default login;

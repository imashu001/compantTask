import { adminAction } from "./actionTypes";

const intitalState = {
  users: [],
  loginSuccess: false,
};

export const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case adminAction.ADD_USER_INITIATTE:
      return {
        ...state,
      };
    case adminAction.FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case adminAction.EDIT_USER_SUCCESS:
      console.log(action.payload, "Edit data");
      return {
        ...state,
        users: action.payload.data,
      };
    case adminAction.LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
      };

    case adminAction.LOGOUT: {
      return intitalState;
    }

    default:
      return {
        ...state,
      };
  }
};

import { adminAction } from "./actionTypes";

export const addUserInitiate = (data) => {
  return {
    type: adminAction.ADD_USER_INITIATTE,
    payload: data,
  };
};

export const registerAdminSuccess = (data) => {
  return {
    type: adminAction.REGISTER_INIT,
    payload: data,
  };
};

export const deleteUserIntiate = (data) => {
  return {
    type: adminAction.DELETE_USER_INITIATE,
    payload: data,
  };
};

export const deleteUserSuccess = (data) => {
  return {
    type: adminAction.DELETE_USER_SUCCESS,
    payload: data,
  };
};

export const fetchUserInitiate = (data) => {
  return {
    type: adminAction.FETCH_USER_INITIATE,
    payload: data,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: adminAction.FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const editUserInitiate = (data) => {
  console.log(data, "data");
  return {
    type: adminAction.EDIT_USER_INITIATE,
    payload: data,
  };
};

export const editUserSuccess = (data) => {
  return {
    type: adminAction.EDIT_USER_SUCCESS,
    payload: data,
  };
};

export const loginInit = (data) => {
  return {
    type: adminAction.LOGIN_INIT,
    payload: data,
  };
};

export const loginSuccess = (data) => {
  return {
    type: adminAction.LOGIN_SUCCESS,
    payload: data,
  };
};

export const signUpInit = (data) => {
  return {
    type: adminAction.SIGNUP_INIT,
    payload: data,
  };
};

export const signUpSuccess = (data) => {
  console.log(data);
  return {
    type: adminAction.SIGNUP_SUCCESS,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: adminAction.LOGOUT,
  };
};

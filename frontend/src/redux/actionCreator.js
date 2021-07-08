import { adminAction } from "./actionTypes"

export const addUserInitiate = (data) => {
  return {
    type: adminAction.ADD_USER_INITIATTE,
    payload: data
  }
}

export const addUserSuccess = (data) => {
  return {
    type: adminAction.ADD_USER_SUCCESS,
    payload: data
  }
}

export const deleteUserIntiate = (data) => {
  return {
    type: adminAction.DELETE_USER_INITIATE,
    payload: data
  }
}

export const deleteUserSuccess = (data) => {
  return {
    type: adminAction.DELETE_USER_SUCCESS,
    payload: data
  }
}

export const fetchUserInitiate = (data) => {
  return {
    type: adminAction.FETCH_USER_INITIATE,
    payload: data
  }
}

export const fetchUserSuccess = (data) => {
  return {
    type: adminAction.FETCH_USER_SUCCESS,
    payload: data
  }
}

export const editUserInitiate = (data) => {
  return {
    type: adminAction.EDIT_USER_INITIATE,
    payload: data
  }
}

export const editUserSuccess = (data) => {
  return {
    type: adminAction.EDIT_USER_SUCCESS,
    payload: data
  }
}
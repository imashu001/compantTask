import {takeLatest} from "redux-saga/effects"
import {adminAction} from "./actionTypes"
import { addUserSaga, deleteUserSaga, editUserSaga, fetchUserSaga, loginSaga, signupSaga } from "./adminSaga"

export function* watcher () {
  yield takeLatest(adminAction.ADD_USER_INITIATTE, addUserSaga)
  yield takeLatest(adminAction.DELETE_USER_INITIATE, deleteUserSaga)
  yield takeLatest(adminAction.EDIT_USER_INITIATE, editUserSaga)

  yield takeLatest(adminAction.FETCH_USER_INITIATE, fetchUserSaga)

  yield takeLatest(adminAction.LOGIN_INIT, loginSaga)
  yield takeLatest(adminAction.SIGNUP_INIT, signupSaga)
}
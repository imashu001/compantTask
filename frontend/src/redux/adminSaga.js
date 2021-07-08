import { put } from "redux-saga/effects";
import {
  registerAdminSuccess,
  editUserSuccess,
  fetchUserInitiate,
  fetchUserSuccess,
  loginSuccess,
  signUpSuccess,
} from "./actionCreator";
import axios from "axios";
import { capitalize } from "lodash";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export function* addUserSaga({ payload }) {
  try {
    const response = yield instance.post("addUser", { ...payload });
    yield put(fetchUserInitiate());
  } catch (error) {}
}

export function* deleteUserSaga({ payload }) {
  const id = payload;
  try {
    const response = yield instance.post("deleteUser", { id });
    yield put(fetchUserInitiate());
  } catch (err) {}
}

export function* editUserSaga({ payload }) {
  try {
    const response = yield instance.post("editUser", { ...payload });
    yield put(editUserSuccess(response));
  } catch (error) {
    console.log(error);
  }
}
export function* fetchUserSaga({ payload }) {
  try {
    const response = yield instance.get("fetchUsers");

    const users = yield response.data.map((user, index) => {
      user.createdAt = new Date(user.createdAt).getTime();
      user.name = capitalize(user.name);
      user.gender = capitalize(user.gender);
      user.companyName = capitalize(user.companyName);
      user.dateofbirth = new Date(user.dateofbirth).getTime();
      return user;
    });

    yield put(fetchUserSuccess(response.data));
  } catch (error) {}
}

export function* loginSaga({ payload }) {
  try {
    const response = yield instance.post("login", { payload });
    localStorage.setItem("token", response.data);
    yield put(loginSuccess());
  } catch (error) {}
}

export function* signupSaga({ payload }) {
  try {
    const response = yield instance.post("signup", { payload });
    yield put(signUpSuccess(response));
  } catch (error) {}
}

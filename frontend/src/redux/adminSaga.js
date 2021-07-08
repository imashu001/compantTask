import {put} from "redux-saga/effects"
import {addUserSuccess, editUserSuccess, fetchUserInitiate, fetchUserSuccess} from "./actionCreator"
import axios from 'axios'


export function* addUserSaga({payload}){
  yield console.log(payload)
  try {
    const response = yield axios.post('http://localhost:8000/addUser', {...payload})
    yield put(fetchUserInitiate())
  } catch (error) {
   
  }
}

export function* deleteUserSaga({payload}) {
  const id = payload
  yield console.log(id)
  try {
    const response = yield axios.post('http://localhost:8000/deleteUser', {id})
    console.log(response)
    yield put(fetchUserInitiate())
  } catch(err) {

  }
}

export function* editUserSaga({payload}) {
  try {
    console.log(payload, "payload")
    const response = yield axios.post('http://localhost:8000/editUser', { ...payload })
    yield put(editUserSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

export function* fetchUserSaga({payload}) {
  yield console.log('vivkek')
  try {
    const response = yield axios.get('http://localhost:8000/fetchUsers')
    console.log(response)
    // console.log(response)
    yield put(fetchUserSuccess(response.data))
  } catch (error) {
    
  }
}


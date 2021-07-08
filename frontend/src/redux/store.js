import {createStore, applyMiddleware, combineReducers} from "redux"
import createSagaMiddleware from "redux-saga"
import { reducer } from "./reducer"
import { watcher } from "./watcher"

const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
  adminState: reducer
})

const store =  createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(watcher)

export default store
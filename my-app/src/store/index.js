import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/cats.js'

export default configureStore({
  //reducer: combineReducers({ cats }),
  reducer: rootReducer,
  devTools: true
})

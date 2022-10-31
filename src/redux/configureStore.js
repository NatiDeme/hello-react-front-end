import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import messagesReducer from "./messages/message";

const reducer = combineReducers({
  messagesReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./Auth/user-context";
import { eventReducer } from "./events/events-context";

const reducer = combineReducers({ user: userReducer, event: eventReducer });
const store = configureStore({
  reducer: reducer,
});
export default store;

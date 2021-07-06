import { combineReducers, createStore } from "redux";
import usersReducer from "./reducers/users.reducer";

const store = createStore(
  combineReducers({ usersReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { createStore } from "redux";
import initialState from "./initialState";
import rootReducer from "./reducer/rootReducer";

export default createStore(rootReducer, initialState)
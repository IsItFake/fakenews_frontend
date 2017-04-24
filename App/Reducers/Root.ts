import { combineReducers, Reducer } from "redux";
import contentReducer from "./Content";

import { StoreState } from "./../Store/StoreState";

const rootReducer: Reducer<StoreState> = combineReducers<StoreState>({
    content: contentReducer,
});

export default rootReducer;

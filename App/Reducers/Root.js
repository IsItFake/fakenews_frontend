import { combineReducers } from "redux";
import contentReducer from "./Content";
const rootReducer = combineReducers({
    content: contentReducer,
});
export default rootReducer;
//# sourceMappingURL=Root.js.map
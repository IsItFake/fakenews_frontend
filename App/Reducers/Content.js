import { handleActions } from "redux-actions";
import { CONTENT_LOAD_ACTION } from "./../Actions/ContentLoad";
const initialState = {
    title: "",
    summary: "",
};
export default handleActions({
    [CONTENT_LOAD_ACTION]: (state, action) => {
        return {
            title: action.payload.title ? action.payload.title.toUpperCase() : "",
            summary: action.payload.summary,
        };
    },
}, initialState);
//# sourceMappingURL=Content.js.map
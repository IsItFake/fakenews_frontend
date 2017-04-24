import { handleActions } from "redux-actions";

import { CONTENT_LOAD_ACTION, ContentLoadActionPayload } from "./../Actions/ContentLoad";
import { Content } from "../Store/State/Content";

const initialState: Content = {
    title: "",
    summary: "",
};

export default handleActions<Content, ContentLoadActionPayload>({
    [CONTENT_LOAD_ACTION]: (state, action) => {
        return {
            title: action.payload.title ? action.payload.title.toUpperCase() : "",
            summary: action.payload.summary,
        };
    },
}, initialState);

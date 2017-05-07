import { handleActions } from "redux-actions";

import { CONTENT_LOAD, ContentLoadPayload } from "./../Actions/ContentLoad";
import { Content } from "../Store/State/Content";

const initialState: Content = {
    title: "",
    summary: "",
};

export default handleActions<Content, ContentLoadPayload>({
    [CONTENT_LOAD]: (state, action) => {
        return {
            title: action.payload.title ? action.payload.title.toUpperCase() : "",
            summary: action.payload.summary,
        };
    },
}, initialState);

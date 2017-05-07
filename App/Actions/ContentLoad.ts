import {createAction} from "redux-actions";

export const CONTENT_LOAD = "ContentLoad";

export interface ContentLoadPayload {
    title: string;
    summary: string;
}

export const contentLoad = createAction<ContentLoadPayload, ContentLoadPayload>(CONTENT_LOAD, undefined);

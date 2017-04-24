import { createAction } from "redux-actions";

export const FAKE_START = "GetFakeStart";
export const FAKE_SUCCESS = "GetFakeSuccess";
export const FAKE_ERROR = "GetFakeError";

export interface FakeStartPayload {
    fake: boolean;
}

export interface FakeSuccessPayload {
    fake: boolean;
}

export interface FakeErrorPayload {
    fake: boolean;
    error: string;
}

export const fakeStart = createAction<FakeStartPayload, FakeStartPayload>(FAKE_START, undefined);
export const fakeSuccess = createAction<FakeSuccessPayload, FakeSuccessPayload>(FAKE_SUCCESS, undefined);
export const fakeError = createAction<FakeErrorPayload, FakeErrorPayload>(FAKE_ERROR, undefined);

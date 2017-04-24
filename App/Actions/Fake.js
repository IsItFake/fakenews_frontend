import { createAction } from "redux-actions";
export const FAKE_START = "GetFakeStart";
export const FAKE_SUCCESS = "GetFakeSuccess";
export const FAKE_ERROR = "GetFakeError";
export const fakeStart = createAction(FAKE_START, undefined);
export const fakeSuccess = createAction(FAKE_SUCCESS, undefined);
export const fakeError = createAction(FAKE_ERROR, undefined);
//# sourceMappingURL=Fake.js.map
import { handleActions } from "redux-actions";

import {
    FAKE_START,
    FAKE_SUCCESS,
    FAKE_ERROR,
    FakeStartPayload,
    FakeSuccessPayload,
    FakeErrorPayload,
} from "./../Actions/Fake";
import { Fake } from "../Store/State/Fake";

const initialState: Fake = {
    isItFake: undefined,
};

export default handleActions<Fake>({
    [FAKE_START]: (state, action: ReduxActions.Action<FakeStartPayload>) => {
        return {
            fake: action.payload.fake,
        };
    },

    [FAKE_SUCCESS]: (state, action: ReduxActions.Action<FakeSuccessPayload>) => {
        return {
            fake: action.payload.fake,
        };
    },

    [FAKE_ERROR]: (state, action: ReduxActions.Action<FakeErrorPayload>) => {
        const errorItem = {
            isLoading: false,
            isError: true,
        };

        return {
            fake: state.isItFake,
            error: errorItem,
        };
    },
}, initialState);

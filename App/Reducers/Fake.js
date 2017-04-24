import { handleActions } from "redux-actions";
import { FAKE_START, FAKE_SUCCESS, FAKE_ERROR, } from "./../Actions/Fake";
const initialState = {
    isItFake: undefined,
};
export default handleActions({
    [FAKE_START]: (state, action) => {
        return {
            fake: action.payload.fake,
        };
    },
    [FAKE_SUCCESS]: (state, action) => {
        return {
            fake: action.payload.fake,
        };
    },
    [FAKE_ERROR]: (state, action) => {
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
//# sourceMappingURL=Fake.js.map
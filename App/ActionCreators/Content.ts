import {
    contentLoad,
    ContentLoadPayload,
} from "../Actions/ContentLoad";

export function loadContent(): ReduxActions.Action<ContentLoadPayload> {
    const title: string = "Is It Fake ??";
    const summary: string = "Test";

    return contentLoad({
        title,
        summary,
    });
}

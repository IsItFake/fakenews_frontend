import {
    contentLoadAction,
    ContentLoadActionPayload,
} from "../Actions/ContentLoad";

export function loadContent(): ReduxActions.Action<ContentLoadActionPayload> {
    const title: string = "Is It Fake ??";
    const summary: string = "Test";

    return contentLoadAction({
        title,
        summary,
    });
}

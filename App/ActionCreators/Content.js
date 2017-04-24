import { contentLoadAction, } from "../Actions/ContentLoad";
export function loadContent() {
    const title = "Is It Fake ??";
    const summary = "Test";
    return contentLoadAction({
        title,
        summary,
    });
}
//# sourceMappingURL=Content.js.map
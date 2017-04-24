import { Content } from "./State/Content";
import { Fake } from "./State/Fake";

export interface StoreState {
    readonly content: Content;
    readonly fake: Fake;
}

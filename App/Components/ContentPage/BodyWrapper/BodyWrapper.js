import * as React from "react";
import BaseComponent from "./../../BaseComponent";
import Advert from "./../../Advert/Advert";
import Results from "../../Results/Results";
const styles = require("./BodyWrapper.component.less");
export default class BodyWrapper extends BaseComponent {
    doRender() {
        return (React.createElement("div", null,
            React.createElement(Advert, { title: "Advert 1", content: "Advert", id: "ad1" }),
            React.createElement(Results, null),
            React.createElement(Advert, { title: "Advert 2", content: "Advert", id: "ad2" })));
    }
}
//# sourceMappingURL=BodyWrapper.js.map
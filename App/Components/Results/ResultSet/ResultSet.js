import * as React from "react";
import BaseComponent from "../../BaseComponent";
const styles = require("./ResultSet.component.less");
export default class ResultSet extends BaseComponent {
    doRender() {
        if (this.props.resultString) {
            const resultJSON = JSON.parse(this.props.resultString);
            const returnRender = [];
            for (const result of resultJSON) {
                if (resultJSON.hasOwnProperty(result)) {
                    returnRender.push(React.createElement("div", { className: styles.result },
                        React.createElement("header", null, result.title),
                        React.createElement("article", null,
                            React.createElement("div", { className: styles.percent },
                                result.percent,
                                "%"),
                            React.createElement("div", { className: styles.site }, result.site),
                            React.createElement("div", { className: styles.fakeSite }, result.fakeSite))));
                }
            }
            if (returnRender) {
                return returnRender;
            }
        }
        return React.createElement("div", null);
    }
}
//# sourceMappingURL=ResultSet.js.map
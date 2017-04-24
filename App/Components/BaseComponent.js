import * as React from "react";
class BaseComponent extends React.Component {
    render() {
        let result;
        try {
            result = this.doRender();
        }
        catch (error) {
            this.logError(error);
            result = null;
        }
        return result;
    }
    logError(error) {
        /* tslint:disable*/
        const componentName = this._reactInternalInstance._currentElement.type.name;
        const componentDetail = this._reactInternalInstance._currentElement.type.toString();
        let propsString = "";
        for (let propName in this.props) {
            propsString += " " + propName;
        }
        /*tslint:enable*/
        console.error(error, {
            Component: componentName,
            ComponentDetail: componentDetail,
            PropList: propsString,
        });
        console.error("A component (" + componentName + ") had an error");
    }
}
export default BaseComponent;
//# sourceMappingURL=BaseComponent.js.map
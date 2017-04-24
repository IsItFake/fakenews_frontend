import * as React from "react";

import BaseComponet from "../BaseComponent";

const styles: any = require("./Form.component.less");

export default class Form extends BaseComponet<null, {}> {
    doRender(): React.ReactElement<{}> {
        return (
            <div>
                Tester
            </div>
        );
    }
}

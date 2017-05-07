import * as React from "react";

import BaseComponent from "./../../BaseComponent";

const styles: any = require("./Footer.component.less");

export default class Footer extends BaseComponent<null, {}> {
    doRender(): React.ReactElement<{}> {
        return (
            <div className={styles.container}>
                &copy; 2017 IsItFake.xyz
            </div>
        );
    }
}

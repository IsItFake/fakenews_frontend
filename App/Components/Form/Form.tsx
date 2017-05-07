import * as React from "react";

import BaseComponet from "../BaseComponent";

const styles: any = require("./Form.component.less");

export default class Form extends BaseComponet<null, {}> {
    doRender(): React.ReactElement<{}> {
        return (
            <div className={styles.container}>
                <form method="get">
                    <label htmlFor="fakeInput">URL to Test:</label>
                    <input type="text" name="testURL" placeholder="http://www.fakenews.xyz" />
                    <button type="submit">
                        Fake ??
                    </button>
                </form>
            </div>
        );
    }
}

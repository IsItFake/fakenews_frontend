import * as React from "react";

import BaseComponent from "../../BaseComponent";

const styles: any = require("./ResultSet.component.less");

export default class ResultSet extends BaseComponent<{
    resultString: any,
}, {}> {
    doRender(): React.ReactElement<{}> {
        if (this.props.resultString) {
            const resultJSON: any = JSON.parse(this.props.resultString);
            const returnRender: any = [];

            for (const result of resultJSON) {
                if (resultJSON.hasOwnProperty(result)) {
                    returnRender.push(
                        <div className={styles.result}>
                            <header>{result.title}</header>
                            <article>
                                <div className={styles.percent}>{result.percent}%</div>
                                <div className={styles.site}>{result.site}</div>
                                <div className={styles.fakeSite}>{result.fakeSite}</div>
                            </article>
                        </div>,
                    );
                }
            }

            if (returnRender) {
                return returnRender;
            }
        }

        return <div />;
    }
}

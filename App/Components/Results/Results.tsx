import * as React from "react";
import { FormEventHandler } from "react";

import BaseComponent from "../BaseComponent";
import ResultSet from "./ResultSet/ResultSet";

const styles: any = require("./Results.component.less");
const inputKey = "testURL";

export default class Results extends BaseComponent<null, {
    fakeURL ?: string,
}> {
    constructor() {
        super();
        this.state = {
            fakeURL: "",
        };
    }

    getResultSet(): void {
        const bob = "";
    }

    doRender(): React.ReactElement<{}> {
        const handleSubmit = (e: React.FormEvent<{
            fakeURL?: string,
        }>) => {
            e.preventDefault();
            const fakeURL = (this.refs[inputKey] as any as HTMLInputElement).value.trim();
            this.setState({fakeURL});
        };

        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <form method="get" onSubmit={handleSubmit}>
                        <label htmlFor="fakeInput">URL to Test:</label>
                        <input type="text" name={inputKey} placeholder="http://www.fakenews.xyz" ref={inputKey} />
                        <button type="submit">
                            Fake ??
                        </button>
                    </form>
                </div>
                <hr />
                <ResultSet resultString={this.state.fakeURL} />
            </div>
        );
    }
}

import React from "react";
import styles from "../css/transition.module.css";

export default class TerminalCursor extends React.Component<any, any> {
    public cursor: boolean;
    speed: number = 500;

    constructor(props: any) {
        super(props);
        this.state = {cursor: '▆'};
        this.cursor = true;
    }

    loop() {
        setInterval(() => {
            if (this.cursor) {
                this.setState(() => ({
                    cursor: "▆"
                }));
                this.cursor = false;
            } else {
                this.setState(() => ({
                    cursor: ""
                }));
                this.cursor = true;
            }
        }, this.speed);
    }

    componentDidMount() {

    }

    render() {
        return (
            <span className={styles.pulsate}>{this.state.cursor}</span>
        )
    }
}

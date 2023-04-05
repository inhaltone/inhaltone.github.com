import React from "react";
import styles from "../css/transition.module.css";
import {useState, useEffect} from "react";

export default function TerminalCursor() {
    const [cursor, setCursor] = useState('');

    useEffect(() => {
        setCursor('▆');
    }, [])

    // const loop = () => {
    //     setInterval(() => {
    //         if (this.cursor) {
    //             this.setState(() => ({
    //                 cursor: "▆"
    //             }));
    //             this.cursor = false;
    //         } else {
    //             this.setState(() => ({
    //                 cursor: ""
    //             }));
    //             this.cursor = true;
    //         }
    //     }, this.speed);
    // }


    return (
        <span className={styles.pulsate}>{cursor}</span>
    )

}

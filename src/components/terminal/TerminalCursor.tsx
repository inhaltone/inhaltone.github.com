import React from "react";
import styles from './terminal.module.scss';
import {useState, useEffect} from "react";

export default function TerminalCursor() {
    const [cursor, setCursor] = useState('');

    useEffect(() => {
        setCursor('▆');
    }, [])


    return (
        <span className={styles.pulsate}>{cursor}</span>
    )

}
